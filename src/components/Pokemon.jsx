import React from 'react';
import { connect } from 'react-redux';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;

    return (
      <div>
        <img src={ image } alt={ `${name} sprite` } />
        <h2>{ name }</h2>
        <h3>{ type }</h3>
        <p>{ `Average Weight: ${averageWeight.value}${averageWeight.measurementUnit}` }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pokemon: state.pokemons.selectedPokemon,
});

export default connect(mapStateToProps)(Pokemon);
