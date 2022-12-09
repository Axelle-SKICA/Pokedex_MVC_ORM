const express = require('express');
const router = express.Router();
// controllers
const mainController = require('./controllers/mainController');
const pokemonsController = require('./controllers/pokemonsController');

router.get('/', mainController.getHomePage);

router.get('/pokemons', pokemonsController.getPokemonsPage);

//route paramétrée pour la fiche détaillée de chaque Pokemon
router.get('/pokemons/:id', pokemonsController.getOnePokemonPage);

module.exports = router;