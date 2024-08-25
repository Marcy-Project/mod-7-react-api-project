import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
  const { pokemonList, setPokemonDetails } = useContext(PokemonContext);
  const navigate = useNavigate();

  const handleCardClick = (pokemon) => {
    setPokemonDetails(pokemon);
    // console.log(pokemon);
    navigate(`/pokemon/${pokemon.id}`);
  };

  return (
    <ul id="pokemon-list">
    {pokemonList.map(pokemon => (
      console.log(pokemon),
      <li key={pokemon.id} onClick={() => handleCardClick(pokemon)}>
        <PokemonCard pokemon={pokemon} />
        
      </li>
    ))}
  </ul>
  );
};

export default PokemonList;