const { Category } = require('../models');

const serviceCreateCategory = async (name) => {
  await Category.create(name);
};

module.exports = { serviceCreateCategory };