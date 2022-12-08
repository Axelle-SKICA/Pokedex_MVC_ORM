const mainController = {
    getHomePage: async (req, res) => {
        res.render("home");
    },
}

module.exports = mainController;