import { combineReducers } from 'redux';

import pokemonsReducer from '../reducers/pokemonsReducer';

const rootReducer = combineReducers({ pokemons: pokemonsReducer });

export default rootReducer;