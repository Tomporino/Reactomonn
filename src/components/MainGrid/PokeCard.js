import React, {useState} from 'react';
import {Typography, Card, CardActions, CardMedia, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

export default function PokeCard({pokemon, classes}){
    return ( (pokemon.sprites) ? 
        (<>
            <Card>
                <CardMedia className={classes.image} image={pokemon.sprites.front_default} />
                <CardActions>
                    <Link to={`pokemon/${pokemon.id}`}>
                        <Button>{pokemon.name}</Button>
                    </Link>
                </CardActions>
            </Card>
        </>) 
        : (<Card>
            <CardMedia image="https://cdn.bulbagarden.net/upload/9/98/Missingno_RB.png" className={classes.image}/>
            <CardActions>
                <Button>Missing No.</Button>
            </CardActions>
        </Card>)
    )
}