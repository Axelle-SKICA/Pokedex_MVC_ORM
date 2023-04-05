const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const router = require('./app/router')

// EJS setup
app.set('view engine', 'ejs');
app.set('views', './app/views');

// public directory setup
app.use(express.static(path.join(__dirname, './public')));

// // to test static version of pages,
// // uncomment below and comment router:
// app.get('/', (req, res) => {
//   res.sendFile((path.join(__dirname, './public/html/home.html')));
// });
// app.get('/pokemons/1', (req, res) => {
//     res.sendFile((path.join(__dirname, './public/html/pokemonDetails.html')));
// });
// app.get('/pokemons', (req, res) => {
//   res.sendFile((path.join(__dirname, './public/html/pokemons.html')));
// });

// router :
app.use(router);

// error 404 handling :
app.use((req, res) => {
    res.status(404).render('404');
  });

//port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});