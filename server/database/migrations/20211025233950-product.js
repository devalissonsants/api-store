'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('products', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false
            },
            code: {
                type: Sequelize.STRING,
                allowNull: true
            },
            type: {
                allowNull: null,
                type: Sequelize.CHAR(2),
            },
        });

    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('products');

    }
};