import { useState, useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const Filter = () => {
  const { savedPokemon, setFilteredPokemon } = useContext(PokemonContext); // Use savedPokemon instead of allPokemon
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = savedPokemon.filter(pokemon =>
      pokemon.name.toLowerCase().includes(term)
    );
    setFilteredPokemon(filtered);
  };

  return (
    <div className="form-container">
      <input
        type="text" 
        value={searchTerm}
        onChange={handleSearch}
        className="prompt"
        placeholder="Search Saved Pokemon by Name or ID..."
      />
  </div>
  );
}

export default Filter;
