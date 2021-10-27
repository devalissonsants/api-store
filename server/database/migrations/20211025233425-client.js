'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('clients', {

            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            cpf: {
                type: Sequelize.STRING,
                allowNull: true,
                unique: true
            },
            state: {
                type: Sequelize.STRING,
                allowNull: true
            },
            city: {
                type: Sequelize.STRING,
                allowNull: true
            },
            address: {
                type: Sequelize.STRING,
                allowNull: true
            },
            complement: {
                type: Sequelize.STRING,
                allowNull: true
            },
            number: {
                type: Sequelize.STRING,
                allowNull: true
            },
            phone_number: {
                type: Sequelize.STRING,
                allowNull: true
            },
            email: {
                type: Sequelize.STRING,
                allowNull: true
            },
            note: Sequelize.STRING,
        });
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('clients');
    }
};