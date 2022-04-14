import React, { useContext } from 'react';

import Pokemon from './Pokemon';

import pokemonContext from '../context/pokemonContext';

function Pokedex() {
  const { goToPrevPokemon, goToNextPokemon } = useContext(pokemonContext);

  return (
    <main>
      <h1>Pokedex</h1>
      <Pokemon />
      <button type="button" onClick={ goToPrevPokemon }>Previous</button>
      <button type="button" onClick={ goToNextPokemon }>Next</button>
    </main>
  );
}

export default Pokedex;
