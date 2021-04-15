import React, {useState, useEffect} from "react";
import {Button, makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom'; 
import getData from '../../api/api';

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none'
    }
}));

export default function Dropdown({pokemons}) {

    const classes = useStyles();

    return (
        <div>
            { pokemons.map(
                    (pokemon, i) => {
                        return (
                            <Link key={i} className={classes.link} to={`/pokemon/${pokemon.id}`}>
                                <Button>
                                    {pokemon.name}
                                </Button>
                            </Link>)
                    }
            )}
        </div>
    )
}