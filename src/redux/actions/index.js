export const NEXT_POKEMON = 'NEXT_POKEMON';
export const PREV_POKEMON = 'PREV_POKEMON';
export const FILTER_BY_TYPES = 'FILTER_BY_TYPES';
export const RESET_FILTER = 'RESET_FILTER'

export const nextPokemon = () => ({ type: NEXT_POKEMON });
export const prevPokemon = () => ({ type: PREV_POKEMON });
export const filterByType = (newType) => ({ type: FILTER_BY_TYPES, newType });
export const resetFilter = () => ({ type: RESET_FILTER });
