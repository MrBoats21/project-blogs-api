module.exports = (sequelize, DataTypes) => {
	const Category = sequelize.define('Category', {
		id: { 
            type: DataTypes.INTEGER, 
            primaryKey: true
        },
		name: DataTypes.STRING(255),
	},
	{
		tableName: 'categories',
		timestamps: false,
        underscored: true,
	});
	return Category;
}