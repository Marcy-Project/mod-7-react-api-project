import { useState, useEffect } from 'react';
import { PokemonContext } from './PokemonContext';
import { getRandomPokemon, fetchAndRenderPokemonList } from '../utils';

export const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [randomList, setRandomList] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [savedPokemon, setSavedPokemon] = useState([]);

  useEffect(() => {
    const initializePokemon = async () => {
      const randomList = getRandomPokemon(20);
      setRandomList(randomList);
      const pokemonData = await fetchAndRenderPokemonList(randomList);
      setPokemonList(pokemonData);
    };
    initializePokemon();
    fetchSavedPokemon();
  }, []);

  const randomizePokemon = async () => {
    const randomList = getRandomPokemon(20);
    setRandomList(randomList);
    const pokemonData = await fetchAndRenderPokemonList(randomList);
    setPokemonList(pokemonData);
  };

  // move into save button ? 
  const savePokemon = async (pokemon) => {
    try {
      const response = await fetch('http://localhost:4000/pokemon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pokemon),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      // console.log('Pokemon saved:', result);
      setSavedPokemon((prev) => [...prev, result]);
      await fetchSavedPokemon();
    } catch (error) {
      console.error('Error saving Pokémon:', error);
    }
  };

  const fetchSavedPokemon = async () => {
    try {
      const response = await fetch('http://localhost:4000/pokemon');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setSavedPokemon(result);
    } catch (error) {
      console.error('Error fetching saved Pokémon:', error);
    }
    
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemonList,
        setPokemonList,
        randomList,
        setRandomList,
        pokemonDetails,
        setPokemonDetails,
        randomizePokemon,
        savedPokemon,
        savePokemon,
        fetchSavedPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
