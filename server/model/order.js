const { Model, DataTypes } = require('sequelize');
class Order extends Model {
    static init(sequelize) {
        super.init({
            request_number: DataTypes.STRING,
            date: DataTypes.DATE,
            note: DataTypes.STRING,
            payment_type: DataTypes.CHAR(2),
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' });
        this.belongsToMany(models.Product, { foreignKey: 'order_id', through: 'order_has_products', as: 'products' });
    }
}
module.exports = Order;