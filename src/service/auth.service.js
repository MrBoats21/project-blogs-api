const { User } = require('../models');
const utils = require('../utils');

const serviceLogin = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (user === null || user.password !== password) {
    return { type: 'erro', message: 'Invalid fields' };
  }

  const token = utils.createToken(email);

  return token;
};

module.exports = {
  serviceLogin,
};