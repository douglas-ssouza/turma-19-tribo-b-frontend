import React from 'react';

import pokemonContext from '../context/pokemonContext';

function Pokemon() {
  return (
    <pokemonContext.Consumer>
      {
        ({ selectedPokemon: { image, name, type, averageWeight } }) => (
          <div>
            <img src={ image } alt={ `${name} sprite` } />
            <h2>{ name }</h2>
            <h3>{ type }</h3>
            <p>{ `Average Weight: ${averageWeight.value}${averageWeight.measurementUnit}` }</p>
          </div>
        )
      }
    </pokemonContext.Consumer>
  );
}

export default Pokemon;
