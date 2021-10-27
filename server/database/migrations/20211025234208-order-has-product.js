'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('order_has_products', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            order_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'orders',
                    key: 'id'
                }
            },
            product_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'products',
                    key: 'id'
                }
            },
            quantity: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            unitary_value: {
                allowNull: false,
                type: Sequelize.DOUBLE,
            },
        });

    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('order_has_products');
    }
};