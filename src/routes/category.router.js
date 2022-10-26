const express = require('express');
const { controllerCreateCategory } = require('../controller/category.controller');
const { handleCategoryName } = require('../middlewares');
const { handleToken } = require('../middlewares');

const router = express.Router();

router.post('/', handleToken, handleCategoryName, controllerCreateCategory);

module.exports = router;