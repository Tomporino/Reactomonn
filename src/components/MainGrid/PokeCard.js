import React, {useContext, useState} from 'react';
import {Typography, Card, CardActions, CardMedia, Button, ButtonBase} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import CatchedContext from '../../context/catchedC';

const useStyles = makeStyles( (theme) => ({
    main: {
        padding: 10,
        border: "solid black 2px"
    },
    image: {
        height: 200,
        position: 'relative'
    },
    pokeball: {
        height: 30
    },
    card: {
        border: "solid black 2px"
    }
}))


export default function PokeCard({pokemon}){

    const { catched, setCatched} = useContext(CatchedContext);

    const classes = useStyles();

    function Catch() {
        let catcheds = catched;
        catcheds.push(pokemon);
        setCatched(catcheds); 
    }

    return (
        <div className={classes.main}>
        {(pokemon.sprites) ? 
        (
            <Card className={classes.card}>
                <CardMedia className={classes.image} image={pokemon.sprites.front_default} />
                <CardActions>
                    <Link to={`pokemon/${pokemon.id}`}>
                        <Button>{pokemon.name}</Button>
                    </Link>
                    <Button onClick={Catch}><img className={classes.pokeball} src='/img/pokeball.png'/></Button>  
                </CardActions>
            </Card>
        ) 
        : (
            <Card>
                <CardMedia image="https://cdn.bulbagarden.net/upload/9/98/Missingno_RB.png" className={classes.image}/>
                <CardActions>
                    <a target="_blank" href="https://bulbapedia.bulbagarden.net/wiki/MissingNo">
                        <Button>Missing No.</Button>
                    </a>
                    <Button><img className={classes.pokeball} src='/img/pokeball.png'/></Button>
                </CardActions>
            </Card>
        )}
    </div>
    )
}