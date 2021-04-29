module.exports = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "User is logged in",
  });
};
