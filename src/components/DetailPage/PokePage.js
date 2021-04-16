import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import getData from '../../api/api';
import {makeStyles} from '@material-ui/core/styles';
import Details from './Details';
import Evolutions from './Evolutions';


const useStyles = makeStyles( (theme) => ({
    main: {
        margin: 100,
        padding: 50,
        backgroundColor: "#42464c", //fade("#1d1d1d", 0.8),
        border: "solid black 5px",
        display: 'flex',
        flexDirection: 'row'
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
    , [id])

    useEffect(() => {}, [pokemon])

    return ( (pokemon) ? (
        <div className={classes.main}>
            <Details pokemon={pokemon}/>
            <Evolutions pokemon={pokemon}/>
        </div>
        ) : (<></>)
    )
}