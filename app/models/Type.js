const { Model, DataTypes } = require("sequelize");
const sequelize = require("../client-sequelize");

class Type extends Model {};

Type.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "type"
});

module.exports = Type;