import React from 'react';
import ItemDetail from './item_detail';

class PokemonDetail extends React.Component {

  componentDidMount() {
    this.props.requestPokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    // console.log(newProps);
    // console.log(this.props);
    if (newProps.params.pokemonId !== this.props.params.pokemonId) {
      this.props.requestPokemon(newProps.params.pokemonId);
    }
  }

  render() {
    let pokemon = this.props.pokemon;
    return (
      <ul>
        <li>{pokemon.name}</li>&nbsp;
          <img src={`${pokemon.image_url}`} />
        <li>Type: {pokemon.poke_type}</li>&nbsp;&nbsp;
        <li>Attack: {pokemon.attack}</li>&nbsp;
        <li>Defense: {pokemon.defense}</li>&nbsp;&nbsp;
        <li>Moves:
          <ul>
            {pokemon.moves.map((move, index) => {
              return (<li key={index}>{move}</li>);
              })
            }
          </ul>
        </li>
        <li>Items:
            {pokemon.items.map((item, index) => {

              return (
                <ItemDetail key={index} item={item} />
              );

              })
            }
        </li>
      </ul>
    );
  }
}

export default PokemonDetail;
