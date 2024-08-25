import {useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import GoHomeButton from '../components/GoHomeButton';
const PokemonDetailPage = () => {
    const { id } = useParams();
    const { pokemonList, setPokemonDetails, pokemonDetails } = useContext(PokemonContext);

    useEffect(() => {
      const pokemon = pokemonList.find(p => p.id === parseInt(id));
      setPokemonDetails(pokemon);
    }, [id, pokemonList, setPokemonDetails]);
  
    // if (!pokemonDetails) {
    //   return <div>Loading...</div>;
    // }
  
    return (
      <div>
          <div id="pokemon-details">
              <h1>Pokemon Detail</h1>
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
          <GoHomeButton />
      </div>
  );
};

export default PokemonDetailPage;