import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const PokemonDetails = () => {
  const { pokemonDetails } = useContext(PokemonContext);

  if (!pokemonDetails) return null;

  return (
    <div id="pokemon-details">
      <h2>{pokemonDetails.name}</h2>
      <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
      <p>Base Stats:</p>
      <p>HP: {pokemonDetails.stats[0].base_stat}</p>
      <p>Attack: {pokemonDetails.stats[1].base_stat}</p>
      <p>Defense: {pokemonDetails.stats[2].base_stat}</p>
      <p>Special Attack: {pokemonDetails.stats[3].base_stat}</p>
      <p>Special Defense: {pokemonDetails.stats[4].base_stat}</p>
      <p>Speed: {pokemonDetails.stats[5].base_stat}</p>
    </div>
  );
};

export default PokemonDetails;