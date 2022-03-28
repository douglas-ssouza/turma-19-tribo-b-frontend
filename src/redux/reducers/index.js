import { combineReducers } from 'redux';

import pokemonsReducer from './pokemonsReducer';

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
});

export default rootReducer;