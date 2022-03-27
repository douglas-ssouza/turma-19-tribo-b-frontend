import React from 'react';
import { connect } from 'react-redux';

import { nextPokemon, prevPokemon } from '../redux/actions';

import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { goToNextPokemon, goToPrevPokemon } = this.props;

    return (
      <main>
        <h1>Pokedex</h1>
        <Pokemon />
        <button type="button" onClick={ goToPrevPokemon }>Previous</button>
        <button type="button" onClick={ goToNextPokemon }>Next</button>
      </main>
    );
  }
}

const mapDispatchtoProps = (dispatch) => ({
  goToNextPokemon: () => dispatch(nextPokemon()),
  goToPrevPokemon: () => dispatch(prevPokemon()),
});

export default connect(null, mapDispatchtoProps)(Pokedex);
