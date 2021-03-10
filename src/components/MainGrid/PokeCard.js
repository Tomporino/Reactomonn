import React, {useState} from 'react';
import {Typography, Card, CardActions, CardMedia, Button, ButtonBase} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles( (theme) => ({
    main: {
        padding: 10
    },
    image: {
        height: 200,
        position: 'relative'
    },
    pokeball: {
        height: 20
    }
}))

export default function PokeCard({pokemon}){

    const classes = useStyles();

    return ( (pokemon.sprites) ? 
        (
        <div className={classes.main}>
            <Card>
                <CardMedia className={classes.image} image={pokemon.sprites.front_default} />
                <CardActions>
                    <Link to={`pokemon/${pokemon.id}`}>
                        <Button>{pokemon.name}</Button>
                    </Link>
                    <Button><img className={classes.pokeball} src={process.env.PUBLIC_URL + '/img/pokeball.png'}/></Button>  
                </CardActions>
            </Card>
        </div>) 
        : (<Card>
            <CardMedia image="https://cdn.bulbagarden.net/upload/9/98/Missingno_RB.png" className={classes.image}/>
            <CardActions>
                <a target="_blank" href="https://bulbapedia.bulbagarden.net/wiki/MissingNo">
                    <Button>Missing No.</Button>
                </a>
            </CardActions>
        </Card>)
    )
}