import React, {useState} from 'react';
import {Typography, Card, CardActions, CardMedia, Button} from '@material-ui/core';

export default function PokeCard({pokemon, classes}){
    return ( (pokemon.sprites) ? 
        (<>
            <Card>
                <CardMedia className={classes.image} image={pokemon.sprites.front_default} />
                <CardActions>
                    <Button>{pokemon.name}</Button>
                </CardActions>
            </Card>
        </>) 
        : (<Card>
            <CardActions>
                <Typography>An Error occure</Typography>
            </CardActions>
        </Card>)
    )
}