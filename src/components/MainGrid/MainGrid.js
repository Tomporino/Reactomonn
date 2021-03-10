import React, {useState} from 'react';
import {Grid, Typography, makeStyles} from '@material-ui/core';
import PokeCard from './PokeCard';

const useStyles = makeStyles((theme) => ({
    main: {
        margin: 100
    }
    }));

export default function MainGrid({pokemons}){
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <Grid container>
                { pokemons.map(
                    (pokemon, i) => {
                        return (<Grid item key={i} xs={3}>
                                    <PokeCard pokemon={pokemon}/>
                                </Grid>)
                    }
                )}
            </Grid>
        </div>
    )
}

