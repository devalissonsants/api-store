const { Model, DataTypes } = require('sequelize');

class Product extends Model {
    static init(sequelize) {
        super.init({
            description: DataTypes.STRING,
            code: DataTypes.STRING,
            type: DataTypes.CHAR(2),
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsToMany(models.Order, { foreignKey: 'product_id', through: 'order_has_products', as: 'orders' });
    }
}
module.exports = Product;