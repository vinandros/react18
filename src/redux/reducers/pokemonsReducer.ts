import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonsService } from '../../services/pokemonService';
import type { Pokemon, GetPokemonResponse } from '../../services/pokemonService';

export const getPokemons = createAsyncThunk<GetPokemonResponse>('get/pokemons', async () => {
  return await getPokemonsService();
});

interface pokemonState {
  pokemons: Array<Pokemon>;
  loading: true | false | null;
}

const initialState = {
  pokemons: [],
  loading: null
} as pokemonState;

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getPokemons.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPokemons.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.pokemons = payload.results;
    });
    builder.addCase(getPokemons.rejected, (state) => {
      state.loading = false;
    });
  }
});

// Action creators are generated for each case reducer function
// export const {  } = pokemonsSlice.actions

export default pokemonsSlice.reducer;
