import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { selectPokemonItem } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  debugger;
  return{
  item: selectPokemonItem(state, ownProps.params.itemId)
}};

export default connect(mapStateToProps)(ItemDetail);
