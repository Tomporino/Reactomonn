import React, {} from 'react';
import {useParams} from 'react-router-dom';


export default function PokePage(){
    let { id } = useParams()

    return (
        <>
            <p>{ id }</p>
        </>
    )
}