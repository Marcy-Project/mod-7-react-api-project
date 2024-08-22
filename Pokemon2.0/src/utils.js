export const handleFetch = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    const { ok, status, statusText, headers } = response;
    console.log('response:', { ok, status, statusText, headers });
    if (!ok) throw new Error(`Fetch failed with status - ${status}, ${statusText}`);

    const isJson = (headers.get('content-type') || '').includes('application/json');
    const responseData = await (isJson ? response.json() : response.text());

    return [responseData, null];
  } catch (error) {
    console.warn(error)
    return [null, error];
  }
};


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

export const fetchAndRenderPokemonList = async (url, setPokemonList, randomList) => {
  const response = await getPokemonDataList(url, randomList);
  setPokemonList(response);
};

export const getPokemonDataList = async (url, pokemonList) => {
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