const Sequelize = require('sequelize');
const database = require('../infra/sequelizeDB');
const Client = require('./client');

const Order = database.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    request_number: {
        type: Sequelize.STRING,
        allowNull: true
    },
    id_client: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { // Client belongsTo Order 1:1
            model: 'clients',
            key: 'id'
        }
    },
    date: {
        type: Sequelize.DATE,
    },
    note: {
        type: Sequelize.STRING,
    },
    payment_type: {
        type: Sequelize.STRING,
    },
})

Order.hasOne(Client);

module.exports = Order;