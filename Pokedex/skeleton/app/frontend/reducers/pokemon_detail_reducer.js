import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash/merge';

const pokemonDetailReducer = (state = {"name": "", "attack":"", "defense":"", "moves":[], "items":[{}], "id":0}, action) => {
  switch(action.type) {
    case RECEIVE_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

export default pokemonDetailReducer;
