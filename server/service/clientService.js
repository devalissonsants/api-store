const Client = require('../model/client');

exports.getAllClient = async function() {
    return await Client.findAll();
};

exports.getClient = async function(id) {
    return await Client.findByPk(id);
};