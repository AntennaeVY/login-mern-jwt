const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const cookie = req.cookies.token;

    if (!cookie) {
      return res.json({ success: false, message: "You are not logged in" });
    }

    const isValid = jwt.verify(cookie, process.env.JWT_SECRET);

    if (!isValid) {
      return res.json({
        success: false,
        message: "Your session is invalid or has expired",
      });
    }

    next();
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
