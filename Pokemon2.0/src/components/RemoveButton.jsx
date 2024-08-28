import  { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { useNavigate } from "react-router-dom";

const RemoveButton = ({ pokemon }) => {
  const navigate = useNavigate();
  const { fetchSavedPokemon } = useContext(PokemonContext);

  const handleRemove = async () => {
    try {
      const response = await fetch(`http://localhost:4000/pokemon/${pokemon.id.toString()}`, {
        method: 'DELETE',
      }); 

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      fetchSavedPokemon();
      navigate(`/saved`);
    } catch (error) {
      console.error('Error removing Pokémon:', error);
    }
  };

  return (
    <button className="ui button" onClick={handleRemove}>
      Remove Pokémon
    </button>
  );
};

export default RemoveButton;
