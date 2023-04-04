const {Pokemon, Type} = require('../models/index')

const typesController = {
    getTypesPage: async (req, res) => {
        try {
            //on récupère en DB la liste de tous les types de pokemons:
            const types = await Type.findAll();
            res.render("types", {types});
        } catch (error) {
            console.log(error.message);
            res.status(500).render('500');
        }
    }
}

module.exports = typesController;