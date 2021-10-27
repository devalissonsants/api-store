'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('orders', {
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
            client_id: {
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
        });

    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('orders');

    }
};