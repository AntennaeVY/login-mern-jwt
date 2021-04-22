const validator = require("validator");
const User = require("../models/user.model");

module.exports = async (req, res, next) => {
  try {
    let { username, email, password } = req.body;
    username = validator.trim(username);
    email = validator.trim(email);
    req.body = { username, email, password };

    if (!username || !email || !password) {
      return res
        .status(401)
        .json({ success: false, message: "Please fill all fields" });
    }

    if (!validator.isEmail(email)) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email format" });
    }

    if (
      validator.contains(username, " ") ||
      !validator.isLength(username, { min: 4, max: 14 })
    ) {
      return res.status(401).json({
        success: false,
        message:
          "Username must be min 4 and max 14 characters with no whitespaces",
      });
    }

    if (!validator.isLength(password, { min: 8 })) {
      return res.status(401).json({
        success: false,
        message: "Password must be min 8 characters",
      });
    }

    const userByEmail = await User.findOne({ email });
    const userByUsername = await User.findOne({ username });

    if (userByEmail) {
      return res
        .status(401)
        .json({ success: false, message: "Email already in use" });
    }

    if (userByUsername) {
      return res
        .status(401)
        .json({ success: false, message: "Username already in use" });
    }

    next();
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
