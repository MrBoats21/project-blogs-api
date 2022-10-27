const express = require('express');
const { 
    controllerCreateCategory, 
    controllerGetCategories,
} = require('../controller/category.controller');

const { handleCategoryName } = require('../middlewares');
const { handleToken } = require('../middlewares');

const router = express.Router();

router.post('/', handleToken, handleCategoryName, controllerCreateCategory);

router.get('/', handleToken, controllerGetCategories);

module.exports = router;