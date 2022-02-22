import React from 'react';

import Pokemon from './Pokemon';

import '../styles/pokedex.css'

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    const { pokemons } = this.props;

    this.state = {
      name: '',
      pokemons,
    };

    this.filterByName = this.filterByName.bind(this);
  }

  filterByName(e) {
    const { pokemons } = this.props;

    this.setState(
      { name: e.target.value },
      () => this.setState((prevState) => ({
        pokemons: pokemons.filter((p) => p.name.toLowerCase().includes(prevState.name)),
      })),
    );
  }

  render() {
    const { name, pokemons } = this.state;

    return (
      <div className='pokedex'>
        <input
          type="text"
          className="name-input"
          placeholder="Digite o nome do pokemon"
          value={ name }
          onInput={ this.filterByName }
        />
        { pokemons.map((pokemon) => <Pokemon key={ pokemon.id } pokemon={ pokemon } />) }
      </div>
    )
  }
}

export default Pokedex;
