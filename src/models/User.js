module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
      allowNull: false
    },
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'users',
  })

  User.associate = (models) => {
    User.belongsTo(models.blog_posts, {
        foreignKey: 'user_id',
        as: 'user',
    });
  };
  
  return User;
}