//Add dotenv
require('dotenv').config()
// Load express
const express = require('express');
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon.js');
const port = 3000
// Create our express app
const app = express();



//... and then farther down the file
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

// Middleware...
app.use((req, res, next) => {
  console.log('I run for all routes')
  next();
})

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "jsx");

app.engine("jsx", require("jsx-view-engine").createEngine())

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
  res.send('<h1>Welcome to the Pokemon App!</h1>');
});

app.post('/pokemons', (req, res) => {
  //pokemons.push(req.body) // pushing new fruit into fruits array
  Pokemon.create(req.body).then(pokemon => {
    console.log("pokemon added");
  });
  res.redirect('/pokemons'); //send the user back to /fruits
})

app.get('/pokemons/:id', (req, res) => {
  Pokemon.findById(req.params.id).then(foundPokemon => {
    res.render('Show', {
      pokemon: foundPokemon
    })
  })
})

app.get('/pokemons', (req, res) => {
  Pokemon.find({}).then(allPokemons => {
    res.render('Index', {
      pokemons: allPokemons
    });
  });
});

app.get('/pokemon/new', (req, res) => {
  res.render('New');
});


// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(port, function () {
  console.log('Listening on port 3000');
});

