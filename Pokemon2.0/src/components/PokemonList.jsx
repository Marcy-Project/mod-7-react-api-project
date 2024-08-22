import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const PokemonList = () => {
  const { pokemonList } = useContext(PokemonContext);

  return (
    <ul id="pokemon-list">
      {pokemonList.map(pokemon => (
        <li key={pokemon.id}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h2>{pokemon.name}</h2>
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;