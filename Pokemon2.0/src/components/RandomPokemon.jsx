import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import PokemonList from './PokemonList';

const RandomPokemon = () => {
  const { randomizePokemon } = useContext(PokemonContext);

  return (
      <div>
          <button className="ui button fluid" onClick={randomizePokemon}>
            Randomize Pokemon
          </button>
          <PokemonList />
      </div>
    );
};

export default RandomPokemon;
