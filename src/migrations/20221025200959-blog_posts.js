'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        title: Sequelize.STRING,
        content: Sequelize.STRING,
        user_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          primaryKey: true,
        },
        published: Sequelize.DATE,
        updated: Sequelize.DATE,
      });

  },

  down: async (queryInterface, _Sequelize) => {
     await queryInterface.dropTable('blog_posts');
  }
};