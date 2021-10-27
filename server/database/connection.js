const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Client = require('../model/Client');
const Order = require('../model/Order');
const Product = require('../model/Product');
const OrderHasProduct = require('../model/OrderHasProduct');

const connection = new Sequelize(dbConfig);

Client.init(connection);
Order.init(connection);
Product.init(connection);
OrderHasProduct.init(connection);

Order.associate(connection.models);
Client.associate(connection.models);

module.exports = connection;