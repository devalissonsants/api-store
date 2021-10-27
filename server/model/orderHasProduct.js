const { Model, DataTypes } = require('sequelize');

class OrderHasProduct extends Model {
    static init(sequelize) {
        super.init({
            order_id: DataTypes.INTEGER,
            product_id: DataTypes.INTEGER,
            code: DataTypes.STRING,
            quantity: DataTypes.INTEGER,
            unitary_value: DataTypes.DOUBLE,
        }, {
            sequelize
        })
    }
}
module.exports = OrderHasProduct;