import React, {useState} from 'react';
import {Grid, Typography, makeStyles} from '@material-ui/core';
import PokeCard from './PokeCard';

const useStyles = makeStyles((theme) => ({
    image: {
        height: 200
    }
    }));

export default function MainGrid({pokemons}){
    const classes = useStyles();
    return (
        <>
            <Grid container>
                { pokemons.map(
                    (pokemon, i) => {
                        return (<Grid item key={i} xs={3}>
                                    <PokeCard pokemon={pokemon} classes={classes}/>
                                </Grid>)
                    }
                )}
            </Grid>
        </>
    )
}

