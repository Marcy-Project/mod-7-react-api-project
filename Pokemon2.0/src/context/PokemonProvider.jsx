import { useState, useEffect } from 'react';
import { PokemonContext } from './PokemonContext';
import { getRandomPokemon, fetchAndRenderPokemonList } from '../utils';

export const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [randomList, setRandomList] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const initializePokemon = async () => {
      const randomList = getRandomPokemon(20);
      setRandomList(randomList);
      const pokemonData = await fetchAndRenderPokemonList(randomList);
      setPokemonList(pokemonData);
    };
    initializePokemon();
  }, []); // Ensure the dependency array is empty

  const randomizePokemon = async () => {
    const randomList = getRandomPokemon(20);
    setRandomList(randomList);
    const pokemonData = await fetchAndRenderPokemonList(randomList);
    setPokemonList(pokemonData);
  };

  return (
    <PokemonContext.Provider value={{ pokemonList, setPokemonList, randomList, setRandomList, pokemonDetails, setPokemonDetails, randomizePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};