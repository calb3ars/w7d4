import { receivePokemon, requestPokemon } from '../../actions/pokemon_actions';
import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = ({pokemonDetail}) => ({
  pokemon: pokemonDetail
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestPokemon: (pokemon) => dispatch(requestPokemon(pokemon))
});

export default connect(mapStateToProps,  mapDispatchToProps)(PokemonDetail);
