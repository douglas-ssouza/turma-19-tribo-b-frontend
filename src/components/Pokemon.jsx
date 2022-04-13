import React from 'react';

import pokemonContext from '../context/pokemonContext';

class Pokemon extends React.Component {
  render() {
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
}

export default Pokemon;
