import React, {useState} from 'react';
import {Grid, Typography} from '@material-ui/core';

export default function MainGrid({pokemons}){
    return (
        <>
            <Grid container>
                { pokemons.map(
                    (pokemon, i) => {
                        return (<Grid item key={i} xs={3}>
                                    <Typography>{pokemon.name}</Typography>
                                </Grid>)
                    }
                )}
            </Grid>
        </>
    )
}

