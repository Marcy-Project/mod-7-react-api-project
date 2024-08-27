import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import PokemonList from './PokemonList';

const RandomPokemon = () => {
  const { randomizePokemon } = useContext(PokemonContext);

  return (
      <div className="form-container">
          <button onClick={randomizePokemon}>
            Randomize Pokémon
          </button>
          <PokemonList />
      </div>
    );
};

export default RandomPokemon;
