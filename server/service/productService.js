const Product = require('../model/product');

exports.getAllProduct = async function() {
    return await Product.findAll();
};

exports.getProduct = async function(id) {
    return await Product.findByPk(id);
};

exports.postProduct = async function(productInfo) {
    const product = await Product.create(productInfo);
    return await Product.findByPk(product.id);
};

exports.putProduct = async function(id, productInfo) {
    var product = await Product.findByPk(id);
    const productUpdate = Object.assign(product, productInfo);
    return await productUpdate.save();
};

exports.delProduct = async function(id) {
    var product = await Product.findByPk(id);
    return product.destroy();
};