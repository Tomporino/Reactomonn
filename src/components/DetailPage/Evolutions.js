import React, {useState, useEffect} from 'react';
import getData from '../../api/api';


export default function Evolutions({pokemon}){

    const [evolutions, setEvolutions] = useState(null);
    const [evolutionChain, setEvolutionChain] = useState(null);

    async function fetchEvolutionChain() {
        await getData(pokemon.species.url)
            .then(data => setEvolutionChain(data.evolution_chain))
    }

    async function fetchEvolutions() {
        await getData(evolutionChain.url)
            .then(data => data.chain.evolves_to)
            .then(evolves => {setEvolutions(evolves)})
    }

    function mapEvolutions() {
        
    }

    useEffect(() => {
        fetchEvolutionChain();
    }, [])

    useEffect(() => {
        if (evolutionChain){
            fetchEvolutions();
        }
    }, evolutionChain)

    useEffect(() => {
        if (evolutions) {
            mapEvolutions()
        }
    }, evolutions)


    return (
        (evolutionChain) ? <></> : <></>
    )
}