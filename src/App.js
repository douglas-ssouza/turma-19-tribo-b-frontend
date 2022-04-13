import React from 'react';

import Pokedex from './components/Pokedex';
import Buttons from './components/Buttons';

import pokemonContext from './context/pokemonContext';

import pokemons from './data';

const INITIAL_STATE = {
  pokemons,
  selectedPokemon: pokemons[0],
  index: 0,
  types: [...new Set(pokemons.map(({ type }) => type))],
};

class App extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;

    this.goToPrevPokemon = this.goToPrevPokemon.bind(this);
    this.goToNextPokemon = this.goToNextPokemon.bind(this);
    this.filterPokemons = this.filterPokemons.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
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

  filterPokemons(filter) {
    const filteredPokemons = pokemons.filter(({ type }) => type === filter);

    this.setState({
      pokemons: filteredPokemons,
      selectedPokemon: filteredPokemons[0],
      index: 0,
    });
  }

  resetFilter() {
    this.setState(INITIAL_STATE);
  }

  render() {
    const contextValue = {
      ...this.state,
      goToNextPokemon: this.goToNextPokemon,
      goToPrevPokemon: this.goToPrevPokemon,
      filterPokemons: this.filterPokemons,
      resetFilter: this.resetFilter,
    };

    return (
      <pokemonContext.Provider value={ contextValue }>
        <Pokedex />
        <Buttons />
      </pokemonContext.Provider>
    );
  }
}

export default App;
