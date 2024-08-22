import { useEffect, useContext } from 'react';
import { PokemonProvider, PokemonContext } from './context/PokemonContext';
import SearchForm from './components/SearchForm';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import { fetchAndRenderPokemonList, getRandomPokemon } from './utils';

const App = () => {
  const { setRandomList, setPokemonList } = useContext(PokemonContext);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    let randomList = JSON.parse(localStorage.getItem('randomList')) || getRandomPokemon(20);
    setRandomList(randomList);
    fetchAndRenderPokemonList(url, setPokemonList, randomList);
  }, [setRandomList, setPokemonList]);

  return (
    <div>
      <h1>Pokemon Site</h1>
      <SearchForm />
      <button id="random-pokemon" onClick={() => {
        const randomList = getRandomPokemon(20);
        setRandomList(randomList);
        localStorage.setItem('randomList', JSON.stringify(randomList));
        fetchAndRenderPokemonList("https://pokeapi.co/api/v2/pokemon/", setPokemonList, randomList);
      }}>Random Pokémon Display</button>
      <PokemonList />
      <PokemonDetails />
    </div>
  );
};

const PokemonApp = () => (
  <PokemonProvider>
    <App />
  </PokemonProvider>
);

export default PokemonApp;