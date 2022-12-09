const {Pokemon, Type} = require('../models/index')

const pokemonsController = {
    getPokemonsPage: async (req, res) => {
        try {
            //on récupère en DB la liste de tous les pokemons:
            const pokemons = await Pokemon.findAll();
            res.render("pokemons", {pokemons});
        } catch (error) {
            console.log(error.message);
            res.status(500).render('500');
        }
    },

    getOnePokemonPage: async (req, res) => {
        //on récupère l'id du pokemon dans l'url de la route paramétrée:
        const searchedId = Number(req.params.id);
        
        try {
            //on récupère en DB le pokemon (et ses types) dont l'id correspond à searchedId:
            const searchedPokemon = await Pokemon.findByPk(searchedId, {
                include: "types"
            });
            console.log(searchedPokemon.get({plain: true}));
            res.render('pokemonDetails', { pokemon: searchedPokemon });
        } catch (error) {
            console.log(error.message);
            res.status(500).render('500');
        }
    }
}

module.exports = pokemonsController;