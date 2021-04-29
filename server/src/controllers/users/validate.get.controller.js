const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  try {
    const cookie = req.cookies.token;

    if (!cookie) {
      return res
        .status(401)
        .json({ success: false, message: "You are not logged in" });
    }

    const isValid = jwt.verify(cookie, process.env.JWT_SECRET);

    if (!isValid) {
      return res.status(401).json({
        success: false,
        message: "Your session is invalid or has expired",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User is logged in",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
