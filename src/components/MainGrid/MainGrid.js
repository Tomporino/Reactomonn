import React, {useState} from 'react';
import {Grid, Typography} from '@material-ui/core';
import PokeCard from './PokeCard';

export default function MainGrid({pokemons}){
    return (
        <>
            <Grid container>
                { pokemons.map(
                    (pokemon, i) => {
                        return (<Grid item key={i} xs={3}>
                                    <PokeCard pokemon={pokemon}/>
                                </Grid>)
                    }
                )}
            </Grid>
        </>
    )
}

