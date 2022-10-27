require('dotenv/config');

const jwt = require('jsonwebtoken');

const createToken = (data, id) => {
  const token = jwt.sign({ data, id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });

  return token;
};

module.exports = { createToken };