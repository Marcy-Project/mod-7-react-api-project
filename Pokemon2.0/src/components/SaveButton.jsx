import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const SaveButton = ({ pokemon }) => {
  const { savePokemon } = useContext(PokemonContext);

  const handleSave = async () => {
    try {
      await savePokemon(pokemon);
    } catch (error) {
      console.error('Error saving Pokémon:', error);
    }
  };

  return (
    <button className="ui button" onClick={handleSave}>
      Save Pokemon
    </button>
  );
};

export default SaveButton;
