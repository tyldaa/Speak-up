const fetchPokemon = async () => {
  console.log("start");
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/35");
  console.log("end");
  console.log(response);
  if (response.ok) {
    const pokemon = await response.json();
    console.log(pokemon);
  }
};
fetchPokemon();
