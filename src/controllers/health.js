const check = (req, res) => {
  res.status(200).json({ message: 'health check ok' });
}

module.exports = {
  check,
};
