'use strict';

const pokeApiBase = 'http:\/\/pokeapi.co\/api\/v2\/';

const request = require('request');
const requestPromise = require('request-promise-native');

// CALLBACK VERSION
let options = {
  uri: pokeApiBase + "pokemon\/1"
};

let callback = function (error, response, pokemon) {
  if (!error && response.statusCode === 200) {
    pokemon = JSON.parse(pokemon);
    console.log(pokemon.forms[0].name);
  }
};

request.get(options, callback);

// PROMISE VERSION
requestPromise.get(options)
  .then((pokemon) => {
    pokemon = JSON.parse(pokemon);
    console.log(pokemon.forms[0].name);
  });