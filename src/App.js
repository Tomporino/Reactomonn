import React, {useState, useContext, useEffect} from 'react';
import getData from './api/api'

function App() {

  const mainUrl = "https://pokeapi.co/api/v2/pokemon"
  const [ pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");


  async function fetchData() {
    let res = await getData(mainUrl);
    setNextUrl(res.next); setPrevUrl(res.previous);
    await loadPokemonData(res.results);
  }


  async function loadPokemonData(pokemons){
    let _pokemons = await Promise.all(pokemons.map(
      async pokemonData => {
        return await getData(pokemonData.url)
      }));
    setPokemonData(_pokemons);
  }


  useEffect(
    () => {fetchData();console.log(pokemonData)}
  ,[])

  return (
    <div className="App">
    </div>
  );
}

export default App;
