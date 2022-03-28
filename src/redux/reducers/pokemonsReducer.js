import { FILTER_POKEMONS, NEXT_POKEMON, PREV_POKEMON, RESET_FILTER } from '../actions';

import pokemons from '../../data';

const INITIAL_STATE = {
  pokemons,
  selectedPokemon: pokemons[0],
  index: 0,
  types: [...new Set(pokemons.map(({ type }) => type))],
};

function pokemonsReducer(state = INITIAL_STATE, action) {
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
  case FILTER_POKEMONS:
    const filteredPokemons = pokemons.filter(({ type }) => type === action.filter);
    return {
      ...state,
      pokemons: filteredPokemons,
      selectedPokemon: filteredPokemons[0],
      index: 0,
    };
  case RESET_FILTER:
    return INITIAL_STATE;
  default:
    return state;
  }
}

export default pokemonsReducer;
