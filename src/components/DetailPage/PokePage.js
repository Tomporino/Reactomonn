import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import getData from '../../api/api';
import {Card, CardActions, CardHeader, CardContent, CardMedia, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {typeColors} from './TypeColors';


const useStyles = makeStyles( (theme) => ({
    main: {
        margin: 100,
        padding: 50,
        backgroundColor: "#42464c", //fade("#1d1d1d", 0.8),
        border: "solid black 5px"
    },
    sub: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: 'flex-end'
        },
    image: {
        height: 200,
        width: 200
    },
    details: {
        textTransform: 'capitalize'
    },
    types: {
        display: 'flex',
        flexDirection: 'row'
    },
    abilities: {
        display: 'flex',
        flexDirection: 'column'
    },
    ability: {
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '10px'
    }
}));

export default function PokePage(){
    let { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${ id }`;


    const classes = useStyles();

    async function fetchData(){
        let res = await getData(pokeUrl);
        setPokemon(res);
    }

    useEffect(
        () => {fetchData();}
    , [])

    return ( (pokemon) ? (
        <div className={classes.main}>
            <div className={classes.sub}>
                <img src={pokemon.sprites.front_default} className={classes.image}/>
                <div className={classes.details}>
                    <div className={classes.types}> 
                        { pokemon.types.map(
                            type => {
                                return (
                                    <div style={{ backgroundColor: typeColors[type.type.name]}}>
                                        {type.type.name}
                                    </div>
                                )}
                        )}
                    </div>
                    <div className={classes.abilities}>
                        {pokemon.abilities.map(
                            (ability) => {
                                return <div className={classes.ability}>{ability.ability.name}</div>
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
        ) : (<></>)
    )
}