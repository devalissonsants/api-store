const Client = require('../model/client');

exports.getAllClient = async function() {
    return await Client.findAll();
};

exports.getClient = async function(id) {
    return await Client.findByPk(id);
};

exports.postClient = async function(clientInfo) {
    return await Client.create(clientInfo);
};

exports.putClient = async function(id, clientInfo) {
    var client = await Client.findByPk(id);
    const clientUpdate = Object.assign(client, clientInfo);
    return await clientUpdate.save();
};

exports.delClient = async function(id, clientInfo) {
    var client = await Client.findByPk(id);
    return client.destroy();
};