import { useContext, useState } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { getPokemonData } from '../utils';

const SearchForm = () => {
  const { setPokemonList } = useContext(PokemonContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await getPokemonData(searchTerm);
    setPokemonList(response ? [response] : []);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Enter Pokémon Name or ID"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;
