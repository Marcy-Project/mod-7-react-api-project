import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      // changes made to make filter and ui/css work 
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
      // see what to keep from this part 
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