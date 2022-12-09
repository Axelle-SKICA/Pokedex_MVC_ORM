const {Pokemon, Type} = require('../models/index')

const pokemonsController = {
    getPokemonsPage: async (req, res) => {
        try {
            const pokemons = await Pokemon.findAll();
            res.render("pokemons", {pokemons});
        } catch (error) {
            console.log(error.message);
            res.status(500).send(error.message);
        }
    }
}

module.exports = pokemonsController;