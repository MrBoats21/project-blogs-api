const jwt = require('jsonwebtoken');

const handleLogin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email.length === 0 || password.length === 0) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

  return next();
};

const handleError = (err, req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || 'Unexpected error. Try again later';
  
  return res.status(status).json({ message });
};

const handleDisplay = async (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};

const handleEmail = async (req, res, next) => {
  const { email } = req.body;

  const validEmail = /\S+@\S+\.\S+/;
  if (!email || !validEmail.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};

const handlePassword = async (req, res, next) => {
  const { password } = req.body;

  if (password.length < 6) {
    return res.status(400)
    .json({ message: '"password" length must be at least 6 characters long' });
  }
  next();
};

const handleToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    jwt.verify(authorization, process.env.JWT_SECRET);
    return next();
  } catch (error) {
    const e = res.status(401).json({ message: 'Expired or invalid token' });
    next(e);
  }
};

const handleCategoryName = async (req, res, next) => {
  const { name } = req.body;

  if (!name || name === '') {
    return res.status(400).json({ message: '"name" is required' });
  }
  next();
};
  
module.exports = {
  handleLogin,
  handleError,
  handleDisplay,
  handleEmail,
  handlePassword,
  handleToken,
  handleCategoryName,
};  