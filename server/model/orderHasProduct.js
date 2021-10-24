const Sequelize = require('sequelize');
const database = require('../infra/sequelizeDB');

const OrderHasProduct = database.define('order_has_product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_order: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'orders',
            key: 'id'
        }
    },
    id_product: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'products',
            key: 'id'
        }
    },
    quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },
    unitary_value: {
        allowNull: false,
        type: Sequelize.DOUBLE,
    },
    type: {
        allowNull: null,
        type: Sequelize.CHAR(2),
    },
})
module.exports = OrderHasProduct;