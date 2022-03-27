import { NEXT_POKEMON, PREV_POKEMON, FILTER_BY_TYPES, RESET_FILTER } from '../actions';

import pokemons from '../../data';

const INITIAL_STATE = {
  pokemons: pokemons,
  selectedPokemon: pokemons[0],
  index: 0,
  types: [...new Set(pokemons.map(({ type }) => type))],
};

const pokemonsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case NEXT_POKEMON:
    const nextIndex = state.index === state.pokemons.length - 1 ? 0 : state.index + 1;
    return {
      ...state,
      selectedPokemon: state.pokemons[nextIndex],
      index: nextIndex,
    };
  case PREV_POKEMON:
    const prevIndex = state.index === 0 ? state.pokemons.length - 1 : state.index - 1;
    return {
      ...state,
      selectedPokemon: state.pokemons[prevIndex],
      index: prevIndex,
    };
  case FILTER_BY_TYPES:
    const filteredPokemons = pokemons.filter(({ type }) => action.newType === type);
    return {
      ...state,
      pokemons: filteredPokemons,
      selectedPokemon: filteredPokemons[0],
      index: 0,
    };
  case RESET_FILTER:
    return {
      ...state,
      pokemons,
      selectedPokemon: pokemons[0],
      index: 0,
    }
  default:
    return state;
  }
};

export default pokemonsReducer;
