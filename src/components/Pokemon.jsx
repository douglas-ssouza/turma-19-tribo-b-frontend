import React from 'react';

import '../styles/pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemon;

    return (
      <div className='pokemon' data-testid="pokemon-container">
        <h2>{ name }</h2>
        <h3>{ type }</h3>
        <p>{ `Average weight: ${value}${measurementUnit}` }</p>
        <img src={ image } alt={ `${name} sprite` } />
      </div>
    );
  }
}

export default Pokemon;
