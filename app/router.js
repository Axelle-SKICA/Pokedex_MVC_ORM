const express = require('express');
const router = express.Router();
// controllers
const mainController = require('./controllers/mainController');
const pokemonsController = require('./controllers/pokemonsController');

router.get('/', mainController.getHomePage);

router.get('/pokemons', pokemonsController.getPokemonsPage);

module.exports = router;