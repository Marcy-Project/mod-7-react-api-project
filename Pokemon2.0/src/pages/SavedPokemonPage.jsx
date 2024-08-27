import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import SavedPokemonCard from '../components/SavedPokemonCard';

const SavedPage = () => {
  const { savedPokemon, fetchSavedPokemon } = useContext(PokemonContext);

  useEffect(() => {
    fetchSavedPokemon();
  }, [fetchSavedPokemon]);

  return (
    <div>
      <h1>Saved Pokémon</h1>
      {savedPokemon.length === 0 ? (
        <div>
          <p>There are no Pokémon saved. <Link to="/">Go to home</Link></p>
        </div>
      ) : (
        <div className="ui cards">
            {savedPokemon.map(pokemon => (
                <SavedPokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
      )}
    </div>
  );
};

export default SavedPage;