import React, {useState, useContext, useEffect, useMemo} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import getData from './api/api';
import MainGrid from './components/MainGrid/MainGrid';
import Navbar from './components/Navbar/Navbar';
import PokePage from './components/DetailPage/PokePage';
import {makeStyles} from '@material-ui/core/styles';
import CatchedContext from './context/catchedC';
import Catched from './components/Catched/Catched';


const useStyles = makeStyles( (theme) => ({
  main: {
    // backgroundImage: "url('/img/pokeballs.png')",
    backgroundColor: '#F44336',
    minHeight: "100vh",
    border: 'solid black 5px',
    borderTop: 'none'
  }
}))

function App() {

  const mainUrl = "https://pokeapi.co/api/v2/pokemon"
  const [ pokemonData, setPokemonData] = useState(null);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  const [catched, setCatched] = useState([]);
  const provideCatchedValue = useMemo( () => ({catched, setCatched}), [catched, setCatched]);

  const classes = useStyles();

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
      setNextUrl(nextPage.next); setPrevUrl(nextPage.previous);
    }
  }


  async function loadPrevPage() {
    if (prevUrl) {
      let prevPage = await getData(prevUrl);
      await loadPokemonData(prevPage.results);
      setNextUrl(prevPage.next); setPrevUrl(prevPage.previous);
    }
  }


  useEffect(
    () => {fetchData();}
    
  ,[])


  return ( (pokemonData) ? (
    <div className={classes.main}>
      <CatchedContext.Provider value={provideCatchedValue}>
      <Router>
        <Navbar loadPrevPage={loadPrevPage} loadNextPage={loadNextPage}/>
        <div className={classes.content}>
          <Switch>
            <Route exact path="/">
              <MainGrid pokemons={pokemonData}></MainGrid>
            </Route>
            <Route exact path="/pokemon/:id">
              <PokePage/>
            </Route>
            <Route exact path="/catched">
              <Catched/>
            </Route>
          </Switch>
        </div>
      </Router>
      </CatchedContext.Provider>
    </div> ) : <></>
  );
}

export default App;
