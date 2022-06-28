import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from './counterReducer';
import pokemonsReducer from './pokemonsReducer';
export const rootReducer = combineReducers({
  counter: counterReducer,
  pokemons: pokemonsReducer
});
