import React from 'react';
import { Link } from 'react-router';

const PokemonIndexItem = ({pokemon}) => {
  return (
    <li>
      <Link to={`/pokemon/${pokemon.id}`}>
        {pokemon.name}
        <img src={`${pokemon.image_url}`} height="30" width="30" />
      </Link>
  </li>
  );
};

export default PokemonIndexItem;
