const User = require("../models/user.model");

module.exports = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.create({ username, email, password });

    return res
      .status(200)
      .json({ success: true, message: "User created successfuly" });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Internal Server Error: ${err.message}`,
    });
  }
};
