import { values } from 'lodash';

export const selectAllPokemon = ({pokemon}) => {
  return values(pokemon);
};

export const selectPokemonItem = (state, itemId) => {
  return state.pokemonDetail.items[itemId];
};
