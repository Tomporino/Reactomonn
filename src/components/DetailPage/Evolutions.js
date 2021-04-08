import React, {useState} from 'react';

export default function Evolutions({pokemon}){

    const [evolutions, setEvolutions] = useState(null);



    return (
        <>{pokemon.name}</>
    )
}