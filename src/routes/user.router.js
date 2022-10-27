const express = require('express');

const { 
  controllerCreateUser, 
  controllerGetUserById, 
  controllerGetUsers,
} = require('../controller/user.controller');

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
  controllerCreateUser,
);

router.get('/', handleToken, controllerGetUsers);

router.get('/:id', handleToken, controllerGetUserById);

module.exports = router;