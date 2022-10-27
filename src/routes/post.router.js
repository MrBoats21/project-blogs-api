const express = require('express');

const { controllerCreatePost, controllerGetPosts } = require('../controller/post.controller');

const { 
  handleToken, 
  handlePost, 
  handlePostCategory,
} = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  handleToken,
  handlePost,
  handlePostCategory,
  controllerCreatePost,
);

router.get('/', handleToken, controllerGetPosts);

module.exports = router;