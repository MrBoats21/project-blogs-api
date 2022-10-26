const { serviceCreateCategory } = require('../service/category.service');

const controllerCreateCategory = async (req, res) => {
  const { name } = req.body;

  await serviceCreateCategory(name);

  res.status(201).json({ name });
};

module.exports = { controllerCreateCategory };