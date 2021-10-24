const Order = require('../model/order');
require('../model/orderHasProduct');

exports.getAllOrder = async function() {
    return await Order.findAll();
};

exports.getOrder = async function(id) {
    return await Order.findByPk(id);
};

exports.postOrder = async function(orderInfo) {
    const order = await Order.create(orderInfo);
    return await Order.findByPk(order.id);
};

exports.putOrder = async function(id, orderInfo) {
    var order = await Order.findByPk(id);
    const orderUpdate = Object.assign(order, orderInfo);
    return await orderUpdate.save();
};

exports.delOrder = async function(id) {
    var order = await Order.findByPk(id);
    return order.destroy();
};