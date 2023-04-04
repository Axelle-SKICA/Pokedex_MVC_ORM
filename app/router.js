const express = require('express');
const router = express.Router();
// controllers
const mainController = require('./controllers/mainController');
const pokemonsController = require('./controllers/pokemonsController');
const typesController = require('./controllers/typesController');

router.get('/', mainController.getHomePage);

router.get('/pokemons', pokemonsController.getPokemonsPage);

//route paramétrée pour la fiche détaillée de chaque Pokemon
router.get('/pokemons/:id', pokemonsController.getOnePokemonPage);

router.get('/types', typesController.getTypesPage);

module.exports = router;