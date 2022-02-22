import React from 'react';

import Pokemon from './Pokemon';

import '../styles/pokedex.css'

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0,
    };

    this.goToNextPokemon = this.goToNextPokemon.bind(this);
  }

  goToNextPokemon() {
    const { pokemons } = this.props;
    const lastIndex = pokemons.length - 1;

    this.setState((prevState) => ({
      index: prevState.index === lastIndex ? 0 : prevState.index + 1, 
    }));
  }

  render() {
    const { pokemons } = this.props;
    const { index } = this.state;

    return (
      <div className='pokedex'>
        <Pokemon key={ pokemons[index].id } pokemon={ pokemons[index] } />
        <button type="button" onClick={ this.goToNextPokemon }>Próximo</button>
      </div>
    )
  }
}

export default Pokedex;
