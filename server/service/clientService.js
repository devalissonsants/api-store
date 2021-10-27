const Client = require('../model/Client');

exports.getAllClient = async function() {
    return await Client.findAll();
};

exports.getClient = async function(id) {
    return await Client.findByPk(id);
};

exports.postClient = async function(clientInfo) {
    const client = await Client.create(clientInfo);
    return await Client.findByPk(client.id);
};

exports.putClient = async function(id, clientInfo) {
    var client = await Client.findByPk(id);
    const clientUpdate = Object.assign(client, clientInfo);
    return await clientUpdate.save();
};

exports.delClient = async function(id) {
    var client = await Client.findByPk(id);
    return client.destroy();
};