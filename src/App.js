import React from 'react';

import Pokedex from './components/Pokedex';
import Buttons from './components/Buttons';

import pokemonContext from './context/pokemonContext';

import pokemons from './data';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemons,
      selectedPokemon: pokemons[0],
      index: 0,
      types: [...new Set(pokemons.map(({ type }) => type))],
    };

    this.goToPrevPokemon = this.goToPrevPokemon.bind(this);
    this.goToNextPokemon = this.goToNextPokemon.bind(this);
  }

  goToPrevPokemon() {
    const { pokemons, index } = this.state;
    const prevIndex = index === 0 ? pokemons.length - 1 : index - 1; 
    
    this.setState({
      selectedPokemon: pokemons[prevIndex],
      index: prevIndex,
    });
  }

  goToNextPokemon() {
    const { pokemons, index } = this.state;
    const nextIndex = index === pokemons.length - 1 ? 0 : index + 1;

    this.setState({
      selectedPokemon: pokemons[nextIndex],
      index: nextIndex,
    });
  }

  render() {
    const contextValue = {
      ...this.state,
      goToNextPokemon: this.goToNextPokemon,
      goToPrevPokemon: this.goToPrevPokemon,
    };

    return (
      <pokemonContext.Provider value={ contextValue }>
        <Pokedex />
        {/* <Buttons /> */}
      </pokemonContext.Provider>
    );
  }
}

export default App;
