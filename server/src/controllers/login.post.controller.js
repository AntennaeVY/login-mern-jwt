const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  try {
    const { user } = req.body;

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res
      .status(200)
      .json({ success: true, message: "Logged successfuly", token });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
