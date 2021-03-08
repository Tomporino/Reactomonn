import React, {useState, useContext, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import getData from './api/api';
import Navbar from './components/Navbar/Navbar';

function App() {

  const mainUrl = "https://pokeapi.co/api/v2/pokemon"
  const [ pokemonData, setPokemonData] = useState(null);
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

  async function loadNextPage() {
    if (nextUrl) {
      let nextPage =  await getData(nextUrl);
      await loadPokemonData(nextPage.results);
      console.log(pokemonData)
      setNextUrl(nextPage.next); setPrevUrl(nextPage.previous);
    }
  }


  async function loadPrevPage() {
    if (prevUrl) {
      let prevPage = await getData(prevUrl);
      await loadPokemonData(prevPage.results);
      console.log(pokemonData)
      setNextUrl(prevPage.next); setPrevUrl(prevPage.previous);
    }
  }

  useEffect(
    () => {fetchData().then(console.log(pokemonData))}
  ,[])

  return (
    <div className="App">
      <Navbar loadPrevPage={loadPrevPage} loadNextPage={loadNextPage}/>
    </div> 
  );
}

export default App;
