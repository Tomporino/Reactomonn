import React, {useState} from "react";
import {Button} from '@material-ui/core';


export default function Dropdown({pokemons}) {
    
    return (
        <div>
            { pokemons.map(
                    (pokemon) => {
                        return (<Button>
                                    {pokemon.name}
                                </Button>)
                    }
            )}
        </div>
    )
}