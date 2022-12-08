const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const router = require('./app/router')

//config EJS
app.set('view engine', 'ejs');
app.set('views', './app/views');

//config dossier public
app.use(express.static(path.join(__dirname, './public')));

//gestion des routes:
app.use(router);
//gestion de la 404:
app.use((req, res) => {
    res.status(404).render('404');
  });

//port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});