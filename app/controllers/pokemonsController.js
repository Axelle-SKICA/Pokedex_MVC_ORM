

const pokemonsController = {
    getPokemonsPage: async (req, res) => {

        res.render("pokemons");
    },
}

module.exports = pokemonsController;