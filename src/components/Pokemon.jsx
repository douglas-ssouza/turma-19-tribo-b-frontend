import React, { useContext } from 'react';

import pokemonContext from '../context/pokemonContext';

function Pokemon() {
  const { selectedPokemon: { image, name, type, averageWeight } } = useContext(pokemonContext);

  return (
    <div>
      <img src={ image } alt={ `${name} sprite` } />
      <h2>{ name }</h2>
      <h3>{ type }</h3>
      <p>{ `Average Weight: ${averageWeight.value}${averageWeight.measurementUnit}` }</p>
    </div>
  );
}

export default Pokemon;
