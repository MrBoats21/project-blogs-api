const { User } = require('../models');

const jwUtil = require('../utils');

const serviceCreateUser = async ({ displayName, email, password, image }) => {
  const users = await User.findOne({ where: { email } });

  if (users) {
    return { type: 'error', message: 'User already registered' };
  }

  await User.create({ displayName, email, password, image });

  const token = jwUtil.createToken(email);

  return { type: null, message: token };
};

const serviceGetUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });

  return users;
};

const serviceGetUserById = (id) => {
  const user = User.findByPk(id, {
    attributes: { exclude: 'password' },
  });
  
  return user;
};

module.exports = { 
  serviceCreateUser, 
  serviceGetUsers, 
  serviceGetUserById,
};