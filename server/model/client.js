const { Model, DataTypes } = require('sequelize');

class Client extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            cpf: DataTypes.STRING,
            state: DataTypes.STRING,
            city: DataTypes.STRING,
            address: DataTypes.STRING,
            complement: DataTypes.STRING,
            number: DataTypes.STRING,
            phone_number: DataTypes.STRING,
            email: DataTypes.STRING,
            note: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.Order, { foreignKey: 'client_id', as: 'orders ' });
    }
}
module.exports = Client;