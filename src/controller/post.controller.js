const { serviceCreatePost, serviceGetPosts } = require('../service/post.service');

const controllerCreatePost = async (req, res) => {
  const data = req.body;
  
  const { id } = req.user;

  const result = await serviceCreatePost(id, data);

  if (result) {
    return res.status(201).json(result);
  }
};

const controllerGetPosts = async (_req, res) => {
  const posts = await serviceGetPosts();
  
  return res.status(200).json(posts);
};

module.exports = { controllerCreatePost, controllerGetPosts };
