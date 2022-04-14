import React, { useState } from 'react';

import pokemonContext from './pokemonContext';

import data from '../data';

function Provider({ children }) {
  const [pokemons, setPokemons] = useState(data);
  const [selectedPokemon, setSelectedPokemon] = useState(data[0]);
  const [index, setIndex] = useState(0);
  const [types, setTypes] = useState([...new Set(data.map(({ type }) => type))]);

  const goToPrevPokemon = () => {
    const prevIndex = index === 0 ? pokemons.length - 1 : index - 1;

    setSelectedPokemon(pokemons[prevIndex]);
    setIndex(prevIndex);
  }

  const goToNextPokemon = () => {
    const nextIndex = index === pokemons.length - 1 ? 0 : index + 1;

    setSelectedPokemon(pokemons[nextIndex]);
    setIndex(nextIndex);
  }

  const filterPokemons = (filter) => {
    const filteredPokemons = data.filter(({ type }) => type === filter);

    setPokemons(filteredPokemons);
    setSelectedPokemon(filteredPokemons[0]);
    setIndex(0);
  }

  const resetFilter = () => {
    setPokemons(data);
    setSelectedPokemon(data[0]);
    setIndex(0);
    setTypes([...new Set(data.map(({ type }) => type))]);
  }

  const contextValue = {
    pokemons,
    selectedPokemon,
    index,
    types,
    goToPrevPokemon,
    goToNextPokemon,
    filterPokemons,
    resetFilter,
  };

  return (
    <pokemonContext.Provider value={ contextValue }>
      { children }
    </pokemonContext.Provider>
  );
}

export default Provider;
