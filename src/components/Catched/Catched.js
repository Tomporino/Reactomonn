import React, {useContext} from 'react';
import CatchedContext from '../../context/catchedC';
import MainGrid from '../../components/MainGrid/MainGrid';

export default function Catched(){

    const { catched } = useContext(CatchedContext);

    return (
        <div>
        {catched.length > 0 ? <MainGrid pokemons={catched}/> : <div>No Pokemons Catched Yet!</div>}
        </div>
    )
}