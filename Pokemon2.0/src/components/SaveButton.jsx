import { useContext, useState } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const SaveButton = ({ pokemon }) => {
  const { savePokemon, savedPokemon, fetchSavedPokemon } = useContext(PokemonContext);
  const [message, setMessage] = useState('');

  const isPokemonInDatabase = (pokemon) => {
    return savedPokemon.some(p => p.id === pokemon.id);
  };

  const handleSave = async () => {
    if (isPokemonInDatabase(pokemon)) {
      setMessage('Pokémon already saved.');
      return;
    }

    try {
      await savePokemon(pokemon);
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