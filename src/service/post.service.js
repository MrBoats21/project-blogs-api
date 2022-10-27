const { BlogPost, PostCategory, User, Category } = require('../models');

const serviceCreatePost = async (id, { title, content, categoryIds }) => {
  const { dataValues } = await BlogPost.create({ userId: id, title, content, categoryIds });

  const data = categoryIds.map((categoryId) => PostCategory
    .create({ postId: dataValues.id, categoryId }));

  await Promise.all(data);

  return dataValues;
};

const serviceGetPosts = async () => BlogPost.findAll({
  include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
  { model: Category, as: 'categories', through: { attributes: [] } },
],
});

module.exports = { serviceCreatePost, serviceGetPosts };
