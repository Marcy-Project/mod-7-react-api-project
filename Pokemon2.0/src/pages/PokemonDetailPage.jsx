import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import GoHomeButton from '../components/GoHomeButton';
import SaveButton from '../components/SaveButton'; 

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
        <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
        <div className="stats-grid">
          <div className="stat-item"><strong>HP:</strong> {pokemonDetails.stats[0].base_stat}</div>
          <div className="stat-item"><strong>Attack:</strong> {pokemonDetails.stats[1].base_stat}</div>
          <div className="stat-item"><strong>Defense:</strong> {pokemonDetails.stats[2].base_stat}</div>
          <div className="stat-item"><strong>Special Attack:</strong> {pokemonDetails.stats[3].base_stat}</div>
          <div className="stat-item"><strong>Special Defense:</strong> {pokemonDetails.stats[4].base_stat}</div>
          <div className="stat-item"><strong>Speed:</strong> {pokemonDetails.stats[5].base_stat}</div>
        </div>
      </div>
      <div className="button-container">
        <GoHomeButton />
        <SaveButton pokemon={pokemonDetails} /> 
      </div>
    </div>
  );
};

export default PokemonDetailPage;
