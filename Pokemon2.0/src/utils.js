export const getRandomPokemon = (numberOfPokemon) => {
  const maxCount = 1025;
  if (numberOfPokemon > maxCount) {
    return "The number is bigger than the maximum pokemons we had.";
  }
  const pokemonList = Array.from(
    { length: numberOfPokemon },
    () => Math.floor(Math.random() * maxCount) + 1
  );
  return pokemonList;
};

export const fetchAndRenderPokemonList = async (pokemonList) => {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const pokemonData = [];
  for (let pokemonId of pokemonList) {
    try {
      const response = await fetch(`${url}${pokemonId}`);
      if (!response.ok) throw new Error("Failed to load a Pokemon");
      const data = await response.json();
      pokemonData.push(data);
    } catch (error) {
      console.warn(error.message);
      return null;
    }
  }
  return pokemonData;
};

export const getPokemonData = async (pokemonName) => {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const fullUrl = `${url}${pokemonName}`;
  try {
    const response = await fetch(fullUrl);
    if (!response.ok) throw new Error("Error parsing JSON");
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.warn(error.message);
    return null;
  }
};