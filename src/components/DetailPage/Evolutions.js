import { makeStyles } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import getData from '../../api/api';


const useStyles = makeStyles((theme) => ({
    main: {
        border: '3px solid black',
        display: 'flex',
        flexDirection: 'row',
        // width: 'fit-content',
        // height: 'fit-content'

    },
    img: {
        height: 200,
        width: 200
    },
}));


function Evolutions({pokemon}){

    const [evolutions, setEvolutions] = useState(null);
    const [evolutionChain, setEvolutionChain] = useState(null);

    const classes = useStyles();

    const mainUrl = 'https://pokeapi.co/api/v2/pokemon/'

    async function fetchEvolutionChain() {
        await getData(pokemon.species.url)
            .then(data => fetchEvolutions(data.evolution_chain))
    }

    async function fetchEvolutions(evolveChain) {
        await getData(evolveChain.url)
            .then(data => data.chain)
            .then(evolves => {setEvolutions(evolves.evolves_to); console.log(evolves)})
    }

    function getNestedEvolutions(evolveChain, evolves) {
        evolves.push(evolveChain[0].species) 
        if (evolveChain[0].evolves_to.length === 1) {
            return getNestedEvolutions(evolveChain[0].evolves_to, evolves)
        }
        return evolves
    }

    function getUniqueEvolutions(){
        return evolutions.map(
            (evo) => {return evo.species}
        )
    }

    function mapEvolutions() {
        if (evolutions.length > 0){
            let evs;
            if (evolutions.length === 1) {
                evs = getNestedEvolutions(evolutions, []);
            } else if (evolutions.length > 1) {
                evs = getUniqueEvolutions();
            }

            Promise.all(evs.map(
                async evData => {
                    return await getData(`${mainUrl}${evData.name}`)
                }
            )).then(data => setEvolutionChain(data))
        }
    }

    useEffect(() => {
        setEvolutionChain(null);
        fetchEvolutionChain();
    }, [pokemon])

    useEffect(() => {
        if (evolutions) {
            mapEvolutions()
        }
    }, [evolutions])

    return ((evolutionChain && evolutions) ? 
        <div className={classes.main}>
            {
                evolutionChain.map(
                    (evolve, i) => {
                        return (
                        <Link key={i} to={`/pokemon/${evolve.id}`}>
                            <div>
                                <img src={evolve.sprites.front_default} className={classes.img}/>
                            </div>
                        </Link>)
                    } 
                )
            }
        </div> : <></>
    )
}

export default Evolutions;