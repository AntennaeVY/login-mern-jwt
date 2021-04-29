module.exports = (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "Logged Out successfuly" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
