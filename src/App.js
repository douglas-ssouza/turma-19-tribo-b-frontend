import React from 'react';

import Pokedex from './components/Pokedex';

import pokemons from './data/pokemons';

class App extends React.Component {
  render() {
    return (
      <Pokedex pokemons={ pokemons } />
    );
  }
}

export default App;
