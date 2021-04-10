import { makeStyles } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import getData from '../../api/api';


const useStyles = makeStyles((theme) => ({
    main: {
        border: '3px solid black',
        display: 'flex',
        flexDirection: 'row'

    },
    img: {
        height: 200,
        width: 200
    },
}));


export default function Evolutions({pokemon}){

    const [evolutions, setEvolutions] = useState(null);
    const [evolutionChain, setEvolutonChain] = useState(null);

    const classes = useStyles();

    async function fetchEvolutionChain() {
        await getData(pokemon.species.url)
            .then(data => fetchEvolutions(data.evolution_chain))
    }

    async function fetchEvolutions(evolveChain) {
        await getData(evolveChain.url)
            .then(data => data.chain.evolves_to)
            .then(evolves => {setEvolutions(evolves)})
    }

    function getNestedEvolutions(evolveChain, evolves) {
        evolves.push(evolveChain[0].species) 
        if (evolveChain[0].evolves_to.length == 1) {
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
        let evs;

        if (evolutions.length == 1) {
            evs = getNestedEvolutions(evolutions, []);
        } else if (evolutions.length > 1) {
            evs = getUniqueEvolutions();
        }

        Promise.all(evs.map(
            async evData => {
                return await getData(`https://pokeapi.co/api/v2/pokemon/${evData.name}`)
            }
        )).then(data => setEvolutonChain(data))
    }

    useEffect(() => {
        fetchEvolutionChain();
    }, [])

    useEffect(() => {
        if (evolutions) {
            mapEvolutions()
        }
    }, evolutions)

    return ((evolutionChain) ? 
        <div className={classes.main}>
            {
                evolutionChain.map(
                    (evolve, i) => {
                        return (
                        <div key={i}>
                            <img src={evolve.sprites.front_default} className={classes.img}/>
                        </div>)
                    } 
                )
            }
        </div> : <></>
    )
}