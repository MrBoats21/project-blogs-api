const authService = require('../service/auth.service');

const login = async (req, res) => {
  const { email, password } = req.body;

  const token = await authService.serviceLogin(email, password);

  if (token.type) {
    return res.status(400).json({ message: token.message });
  }
  
  return res.status(200).json({ token });
};

module.exports = { login };