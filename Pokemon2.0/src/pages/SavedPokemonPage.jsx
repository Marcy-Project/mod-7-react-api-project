import { useContext, useEffect } from 'react';
import { PokemonContext } from '../context/PokemonContext'; 
import SavedPokemonCard from '../components/SavedPokemonCard';
import Filter from '../components/Filter';

const SavedPage = () => {
  const { filteredPokemon, fetchSavedPokemon } = useContext(PokemonContext);

  useEffect(() => {
    fetchSavedPokemon(); 
  }, []);

  return (
    <div>
      <Filter />
      <div id="pokemon-list-container">
        <ul id="pokemon-list" className="ui cards">
          {filteredPokemon.length ? (
            filteredPokemon.map(pokemon => (
              <li key={pokemon.id}>
                <SavedPokemonCard pokemon={pokemon} />
              </li>
            ))
          ) : (
            <p className="no-pokemon-message">No Pokémon saved or matched the filter.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SavedPage;
