import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import getData from '../../api/api';
import {Card, CardActions, CardHeader, CardContent, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const typeColors = {
    bug: '#729f3f',
    dragon: '#53a4cf',
    fairy: '#fdb9e9',
    fire: '#fd7d24',
    ghost: '#7b62a3',
    ground: '#f7de3f',
    normal: '#a4acaf',
    pyschic: '#f366b9',
    steel: '#9eb7b',
    dark: '#707070',
    electric: '#eed535',
    fighting: '#d56723',
    flying: '#3dc7ef',
    grass: '#9bcc50',
    ice: '#51c4e7',
    poison: '#b97fc9',
    rock: '#a38c21',
    water: '#4592c4'
}


const useStyles = makeStyles( (theme) => ({
    main: {
        textAlign: 'center',
        margin: 10
    },
    image: {
        height: 300,
        width: 300
    }
}));

export default function PokePage(){
    let { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${ id }`

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
            <img src={pokemon.sprites.front_default} className={classes.image}/>
            <Card>
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