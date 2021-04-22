const validator = require("validator");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

module.exports = async (req, res, next) => {
  try {
    let { username, password } = req.body;
    username = validator.trim(username);

    if (!username || !password) {
      return res
        .status(401)
        .json({ success: false, message: "Missing username or password" });
    }

    const user = await User.findOne({ username });

    const isPasswordValid = user
      ? bcrypt.compareSync(password, user.hashed_password)
      : null;

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect username/password" });
    }

    req.body.user = user;
    next();
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
