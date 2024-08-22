import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  // Add prop validation for 'children'
  PokemonProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const [pokemonList, setPokemonList] = useState([]);
  const [randomList, setRandomList] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState(null);

  return (
    <PokemonContext.Provider value={{ pokemonList, setPokemonList, randomList, setRandomList, pokemonDetails, setPokemonDetails }}>
      {children}
    </PokemonContext.Provider>
  );
};