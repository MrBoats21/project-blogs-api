const { Category } = require('../models');

const serviceCreateCategory = async (name) => {
  await Category.create(name);
};

const serviceGetCategories = async () => Category.findAll();

module.exports = { serviceCreateCategory, serviceGetCategories };