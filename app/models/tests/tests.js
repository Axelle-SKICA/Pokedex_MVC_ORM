const { Pokemon, Type } = require('../index');

async function test01() {
    try {
        const pokemonsList = await Pokemon.findAll();
        console.log(JSON.stringify(pokemonsList, null, 2));
    }
    catch (error) {
        console.log(error.message);
    }
}

test01();