export const NEXT_POKEMON = 'NEXT_POKEMON';
export const PREV_POKEMON = 'PREV_POKEMON';
export const FILTER_POKEMONS = 'FILTER_POKEMONS';
export const RESET_FILTER = 'RESET_FILTER';

export const nextPokemon = () => ({ type: NEXT_POKEMON });
export const prevPokemon = () => ({ type: PREV_POKEMON });
export const filterPokemons = (filter) => ({ type: FILTER_POKEMONS, filter });
export const resetFilter = () => ({ type: RESET_FILTER });
