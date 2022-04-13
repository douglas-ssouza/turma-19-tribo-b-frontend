import React from 'react';

import Pokemon from './Pokemon';

import pokemonContext from '../context/pokemonContext';

class Pokedex extends React.Component {
  render() {
    return (
      <pokemonContext.Consumer>
        {
          ({ goToNextPokemon, goToPrevPokemon }) => (
            <main>
              <h1>Pokedex</h1>
              <Pokemon />
              <button type="button" onClick={ goToPrevPokemon }>Previous</button>
              <button type="button" onClick={ goToNextPokemon }>Next</button>
            </main>
          )
        }  
      </pokemonContext.Consumer>
    );
  }
}

export default Pokedex;
