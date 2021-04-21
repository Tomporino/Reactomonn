import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import PokeCard from './PokeCard';

const useStyles = makeStyles((theme) => ({
    main: {
        margin: 100,
        padding: 50,
        backgroundColor: "#42464c", //fade("#1d1d1d", 0.8),
        border: "solid black 5px"
    }
}));

export default function MainGrid({ pokemons }) {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <Grid container
                spacing={3}>
                {pokemons.map(
                    (pokemon, i) => {
                        return (<Grid item key={i} xs={3}>
                            <PokeCard pokemon={pokemon} />
                        </Grid>)
                    }
                )}
            </Grid>
        </div>
    )
}

