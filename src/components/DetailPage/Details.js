import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
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
    stats: {
        border: 'solid black 3px',
    }
}))


export default function Details({pokemon}){

    const classes = useStyles();

    return (

        <div className={classes.main}>
            <div className={classes.sub}>

                <img src={pokemon.sprites.front_default} className={classes.image}/>

                <div className={classes.types}> 
                    { pokemon.types.map(
                        type => {
                            return (
                                <Typography className={classes.type} style={{ backgroundColor: typeColors[type.type.name]}}>
                                    {type.type.name}
                                </Typography>
                            )}
                    )}
                </div>

                <div className={classes.abilities}>
                    {pokemon.abilities.map(
                        (ability) => {
                            return <Typography className={classes.ability}>{ability.ability.name}</Typography>
                        }
                    )}
                </div>

            </div>

            <div className={classes.stats}>
                {pokemon.stats.map(
                    (stat) => {
                        return <Typography>{stat.stat.name}: {stat.base_stat}</Typography>
                    }
                )}
            </div>
        </div>
    );

}