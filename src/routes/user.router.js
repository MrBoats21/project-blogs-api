const express = require('express');

const userController = require('../controller/user.controller');

const { 
    handleDisplay,
    handleEmail, 
    handlePassword,
    handleToken,
} = require('../middlewares');

const router = express.Router();

router.post(
  '/', 
  handleDisplay,
  handleEmail, 
  handlePassword, 
  userController.controllerCreateUser,
);

router.get('/', handleToken, userController.controllerGetUsers);

router.get('/:id', handleToken, userController.controllerGetUserById);

module.exports = router;