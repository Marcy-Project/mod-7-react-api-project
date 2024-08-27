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
      setMessage('Pokémon already saved in the database');
      return;
    }

    try {
      await savePokemon(pokemon);
      await fetchSavedPokemon();
      setMessage('Pokémon saved successfully');
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
      {message && <p>{message}</p>}
    </div>
  );
};

export default SaveButton;