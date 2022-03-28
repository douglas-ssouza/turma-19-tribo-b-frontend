import React from 'react';
import { connect } from 'react-redux';

import Pokemon from './Pokemon';

import { nextPokemon, prevPokemon } from '../redux/actions';

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

const mapDispatchToProps = (dispatch) => ({
  goToPrevPokemon: () => dispatch(prevPokemon()),
  goToNextPokemon: () => dispatch(nextPokemon()),
});

export default connect(null, mapDispatchToProps)(Pokedex);
