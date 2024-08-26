import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const RemoveButton = ({ pokemon }) => {
  const { setSavedPokemon } = useContext(PokemonContext);

  const handleRemove = async () => {
    try {
      const response = await fetch(`http://localhost:4000/pokemon/${pokemon.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSavedPokemon(prev => prev.filter(p => p.id !== pokemon.id));
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
