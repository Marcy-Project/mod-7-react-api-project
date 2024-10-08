import { useContext, useState } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const SaveButton = ({ pokemon }) => {
  const { savePokemon, savedPokemon, fetchSavedPokemon } = useContext(PokemonContext);
  const [message, setMessage] = useState('');

  const isPokemonInDatabase = (pokemon) => {
    return savedPokemon.some(p => p.id.toString() === pokemon.id.toString());
  };

  const handleSave = async () => {
    if (isPokemonInDatabase(pokemon)) {
      setMessage('Pokémon already saved.');
      return;
    }

    try {
      // Convert the pokemon ID to a string before saving
      const pokemonToSave = { ...pokemon, id: pokemon.id.toString() };
      await savePokemon(pokemonToSave);
      await fetchSavedPokemon();
      setMessage('Pokémon saved!');
    } catch (error) {
      console.error('Error saving Pokémon:', error);
      setMessage('Error saving Pokémon');
    }
  };

  return (
    <div>
     <button className="ui button" onClick={handleSave}>
        Save Pokémon
      </button>
      {message && <div className="message-container"><p>{message}</p></div>}
    </div>
  );
};

export default SaveButton;