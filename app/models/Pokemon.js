const { Model, DataTypes } = require("sequelize");
const sequelize = require("../client-sequelize");

class Pokemon extends Model {};

Pokemon.init({
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pv: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    attaque: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    defense: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    attaque_spe: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    defense_spe: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    vitesse: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    numero: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "pokemon"
});

module.exports = Pokemon;