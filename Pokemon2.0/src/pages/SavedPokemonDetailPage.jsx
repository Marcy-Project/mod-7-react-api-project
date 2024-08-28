import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import RemoveButton from '../components/RemoveButton';
import { useNavigate } from 'react-router-dom';
const SavedPokemonDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {setPokemonDetails, pokemonDetails, savedPokemon } = useContext(PokemonContext);

  useEffect(() => {
    const pokemon = savedPokemon.find(p => p.id == id);
    setPokemonDetails(pokemon);
  }, [id, savedPokemon, setPokemonDetails]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

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
        <button className="ui button fluid" onClick={() => navigate('/saved')}>
        Return to Saved
        </button>
        <RemoveButton pokemon={pokemonDetails} /> 
      </div>
    </div>
  );
};

export default SavedPokemonDetailPage;
