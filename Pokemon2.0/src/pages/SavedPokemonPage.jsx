// src/pages/SavedPage.js
import { useContext, useEffect } from 'react';
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
      <div className="ui cards">
        {savedPokemon.map(pokemon => (
          <SavedPokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default SavedPage;
