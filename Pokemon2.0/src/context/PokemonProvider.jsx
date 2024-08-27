import { useState, useEffect } from 'react';
import { PokemonContext } from './PokemonContext'; // Ensure the import is correct
import { getRandomPokemon, fetchAndRenderPokemonList } from '../utils';

export const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [randomList, setRandomList] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [savedPokemon, setSavedPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    const initializePokemon = async () => {
      try {
        const randomList = getRandomPokemon(20);
        setRandomList(randomList);
        const pokemonData = await fetchAndRenderPokemonList(randomList);
        setPokemonList(pokemonData);
      } catch (error) {
        console.error('Error initializing Pokemon:', error);
      }
    };
    initializePokemon();
    fetchSavedPokemon(); // Fetch saved Pokémon after initialization
  }, []);

  const randomizePokemon = async () => {
    try {
      const randomList = getRandomPokemon(20);
      setRandomList(randomList);
      const pokemonData = await fetchAndRenderPokemonList(randomList);
      setPokemonList(pokemonData);
    } catch (error) {
      console.error('Error randomizing Pokemon:', error);
    }
  };

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
      setSavedPokemon((prev) => [...prev, result]);
      await fetchSavedPokemon(); // Refresh saved Pokémon list
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
      console.log('Fetched saved Pokemon:', result); // Debugging
      setSavedPokemon(result);
      setFilteredPokemon(result);
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
        filteredPokemon,
        setFilteredPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
