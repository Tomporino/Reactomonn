import React, {useState, useEffect} from "react";
import {Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom'; 
import getData from '../../api/api';

export default function Dropdown({pokemons}) {

    const [pokemonId, setPokemonId] = useState(null);
    const history = useHistory();

    const openPokemonPage =  (selectedPokemon) => {
        getData(selectedPokemon.url).then(data => setPokemonId(data.id));
    }    

    useEffect(() => {
        if (pokemonId != null){
            history.push(`pokemon/${pokemonId}`)
        }
    }, [pokemonId])

    return (
        <div>
            { pokemons.map(
                    (pokemon, i) => {
                        return (
                            <Button key={i} onClick={() => openPokemonPage(pokemon)}>
                                {pokemon.name}
                            </Button>)
                    }
            )}
        </div>
    )
}