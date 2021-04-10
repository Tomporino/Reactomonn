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

    function getNestedEvolutions(evolveChain, evolves) {
        evolves.push(evolveChain[0].species) 
        if (evolveChain[0].evolves_to.length == 1) {
            return getNestedEvolutions(evolveChain[0].evolves_to, evolves)
        }
        return evolves
    }

    function getUniqueEvolutions(){
        return evolutions.map(
            (evo) => {return evo.species}
        )
    }

    function mapEvolutions() {
        if (evolutions.length == 1) {
            let evs = getNestedEvolutions(evolutions, []);
            console.log(evs);
        } else if (evolutions.length > 1) {
            let evs = getUniqueEvolutions();
            console.log(evs)
        }
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