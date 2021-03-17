import React, {useContext, useEffect} from 'react';
import CatchedContext from '../../context/catchedC';
import MainGrid from '../../components/MainGrid/MainGrid';

export default function Catched({classes}){
    const { catched } = useContext(CatchedContext);

    return (
        <>
        {catched.length > 0 ? <MainGrid pokemons={catched}/> : <div>No Pokemons Catched Yet!</div>}
        </>
    )
}