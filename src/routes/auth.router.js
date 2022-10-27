const express = require('express');

const { login } = require('../controller/auth.controller');

const { handleLogin } = require('../middlewares');

const router = express.Router();

router.post('/', handleLogin, login);

module.exports = router;