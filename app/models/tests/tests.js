const { Pokemon, Type } = require('../index');

//afficher en console l'ensemble des Pokemons
async function test01() {
    try {
        const pokemonsList = await Pokemon.findAll();
        console.log(JSON.stringify(pokemonsList, null, 2));
    } catch (error) {
        console.log(error.message);
    }
}

// test01();

//afficher en console le pokemon selon son id, avec son/ses type(s)
async function test02(id) {
    try {
        const searchedPokemonWithType = await Pokemon.findByPk(id, {
            include: "types",
        });
        console.log(JSON.stringify(searchedPokemonWithType, null, 2));
    } catch (error) {
        console.log(error.message);
    }
};

// test02(25);


//afficher en console le Type Psy avec les pokemons de ce type:
async function test03() {
    try {
        const psyTypeWithPokemons = await Type.findOne({
            where: {
                name: "Psy"
            },
            include: "pokemons"
        });
        console.log(psyTypeWithPokemons.get({ plain: true }));
    } catch (error) {
        console.log(error.message)
    }
};

// test03();