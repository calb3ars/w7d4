import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';
import { createPokemon } from '../../actions/pokemon_actions';

const mapDispatchtoProps = (dispatch) => ({
  createPokemon: params => dispatch(createPokemon(params))
});
