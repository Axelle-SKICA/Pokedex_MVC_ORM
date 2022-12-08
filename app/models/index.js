const Pokemon = require('./Pokemon');
const Type = require('./Type');

// Pokemon <-> Type (Many-to-Many)
Pokemon.belongsToMany(Type, {
    through: "pokemon_type",
    as: "types",
    foreignKey: "pokemon_id",
    otherKey: "type_id"
});

Type.belongsToMany(Pokemon, {
    through: "pokemon_type",
    as: "pokemons",
    foreignKey: "type_id",
    otherKey: "pokemon_id"
});

module.exports = { Pokemon, Type };