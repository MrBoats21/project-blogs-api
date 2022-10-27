const { serviceCreateCategory, serviceGetCategories } = require('../service/category.service');

const controllerCreateCategory = async (req, res) => {
  const { name } = req.body;

  await serviceCreateCategory(name);

  res.status(201).json({ name });
};

const controllerGetCategories = async (req, res) => {
  const result = await serviceGetCategories();

  res.status(200).json(result);
};

module.exports = { controllerCreateCategory, controllerGetCategories };