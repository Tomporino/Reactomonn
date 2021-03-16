import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import getData from '../../api/api';
import {Card, CardActions, CardHeader, CardContent, CardMedia, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {typeColors} from './TypeColors';


const useStyles = makeStyles( (theme) => ({
    main: {
        textAlign: 'center',
        display: 'flex',
        alignContent: "center",
        justifyContent: 'center',
        height: '100vh',
        },
    image: {
        height: 300,
        width: 300
    },
    details: {
        width: 300
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
            <Card className={classes.details}>
                <CardMedia image={pokemon.sprites.front_default} className={classes.image}/>
                <CardHeader title={pokemon.name}
                />
                <CardContent>
                    <div>
                        { pokemon.types.map(
                            type => {
                                return (
                                    <span style={{ backgroundColor: typeColors[type.type.name]}}>
                                        {type.type.name}
                                    </span>
                                )
                            }
                        )}
                    </div>
                    <Typography>Height: {pokemon.height}</Typography>
                    <Typography>Weight: {pokemon.weight}</Typography>
                    <Typography>
                        {pokemon.abilities.map(
                            (ability, i) => {
                                return <Typography>Ability{i+1}: {ability.ability.name}</Typography>
                            }
                        )}
                    </Typography>
                </CardContent>
            </Card>
        </div>
        ) : (<></>)
    )
}