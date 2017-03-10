export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const CREATE_POKEMON = "CREATE_POKEMON";

import * as APIUtil from '../util/api_util.js';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePokemon = pokemon => ({
  type: RECEIVE_POKEMON,
  pokemon
});

export const createPokemon = pokemon => ({
  type: CREATE_POKEMON,
  pokemon
});

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const requestPokemon = (id) => (dispatch) => {
  return APIUtil.fetchPokemon(id)
    .then(pokemon => dispatch(receivePokemon(pokemon)));
};

export const requestNewPokemon = (params) => (dispatch) => {
  return APIUtil.createPokemon(params)
    .then(pokemon => dispatch(createPokemon(pokemon)));
};
