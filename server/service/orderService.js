const Order = require('../model/Order');
const OrderHasProduct = require('../model/OrderHasProduct');

exports.getAllOrder = async function() {
    return await Order.findAll({
        include: { association: 'client' }
    });
};

exports.getOrder = async function(id) {
    return await Order.findByPk(id, {
        include: [
            { association: 'products' },
            { association: 'client' }
        ]
    });
};

exports.postOrder = async function(orderInfo) {
    const order = await Order.create(orderInfo);
    if ((orderInfo.hasOwnProperty('product_or_service'))) {
        orderInfo.product_or_service.forEach(element => {
            element.order_id = order.id;
            (async() => {
                console.log(element);
                await OrderHasProduct.create(element);
            })();

        });
    }
    await Order.findByPk(order.id, {
        include: [
            { association: 'products' },
            { association: 'client' }
        ]
    });
};

exports.putOrder = async function(id, orderInfo) {
    var order = await Order.findByPk(id);
    const orderUpdate = Object.assign(order, orderInfo);
    await orderUpdate.save();
    return await Order.findByPk(order.id, {
        include: { association: 'client' }
    });
};

exports.delOrder = async function(id) {
    var order = await Order.findByPk(id);
    return order.destroy();
};