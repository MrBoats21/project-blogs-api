const express = require('express');

const authController = require('../controller/auth.controller');

const { handleLogin } = require('../middlewares');

const router = express.Router();

router.post('/', handleLogin, authController.login);

module.exports = router;