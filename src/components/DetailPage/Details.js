import { makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import getData from '../../api/api';
import {typeColors} from './TypeColors';


const useStyles = makeStyles((theme) => ({
    image: {
        height: 200,
        width: 200,
        border: 'solid black 3px'
    },
    main: {
        textTransform: 'capitalize',
        display: 'flex',
        flexDirection: 'row',
        "& div": {
            margin: '5px'
        }
    },
    sub: {
        "& div": {
            margin: '5px',
            padding: '5px'
        }
    },
    types: {
        display: 'flex',
        flexDirection: 'column',
        border: 'solid black 3px',

    },
    type: {
        borderRadius: '10px',
        border: '1px solid black',

    },
    abilities: {
        display: 'flex',
        flexDirection: 'column',
        border: 'solid black 3px',
    },
    ability: {
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '10px',
    },
    details: {
        border: 'solid black 3px',
        padding: '5px'
    },
    stats: {

    },
    flavor_text: {
        width: '150px'
    },
}))


export default function Details({pokemon}){

    const [species, setSpecies] = useState(null);
    const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`

    const classes = useStyles();

    async function getSpecies(){
        await getData(speciesUrl)
            .then(data => setSpecies(data.flavor_text_entries));
    }

    useEffect(() => {
        getSpecies();
    }, [])

    return ( (species) ?

        <div className={classes.main}>
            <div className={classes.sub}>

                <img src={pokemon.sprites.front_default} className={classes.image}/>

                <div className={classes.types}> 
                    { pokemon.types.map(
                        (type, i) => {
                            return (
                                <Typography key={i} className={classes.type} style={{ backgroundColor: typeColors[type.type.name]}}>
                                    {type.type.name}
                                </Typography>
                            )}
                    )}
                </div>

                <div className={classes.abilities}>
                    {pokemon.abilities.map(
                        (ability, i) => {
                            return <Typography key={i} className={classes.ability}>{ability.ability.name}</Typography>
                        }
                    )}
                </div>

            </div>

            <div className={classes.details}>
                <div className={classes.stats}>
                    {pokemon.stats.map(
                        (stat, i) => {
                            return <Typography key={i}>{stat.stat.name}: {stat.base_stat}</Typography>
                        }
                    )}
                </div>
                <div className={classes.flavor_text}>
                    {species[0].flavor_text}
                </div>
            </div>
        </div> : <></>
    );

}