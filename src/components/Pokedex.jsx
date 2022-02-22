import React from 'react';

import Pokemon from './Pokemon';

import '../styles/pokedex.css'

import pokemons from '../data/pokemons';

class Pokedex extends React.Component {
  render() {
    return pokemons.map((pokemon) => <Pokemon key={ pokemon.id } pokemon={ pokemon } />);
  }
}

export default Pokedex;
