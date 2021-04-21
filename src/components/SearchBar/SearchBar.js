import { makeStyles, InputBase, fade } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import Dropdown from './DropdownMenu';

// STYLE

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        width: '20ch',
        },
    }
}))

// COMPONENT

export default function SearchBar(){

    const [pokemons, setPokemons] = useState([]);
    const [foundPokemons, setFoundPokemons] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const classes = useStyles();

    let openfile = () => {
        fetch("pokemons/pokemons.txt")
        .then(response => response.text())
        .then(data => setPokemonsState(data))
    }

    let setPokemonsState = (fileData) => {
        let regex = /\{(.*?)\}/g;
        let result = [...fileData.matchAll(regex)]
        setPokemons(result.map(pokemon => JSON.parse(pokemon[0])))
    }


    let compare = (a, b) => {
        if (a.name < b.name){
            return -1;
        }
        if (a.name > b.name){
            return 1;
        }
        return 0;
    }

    let search = () => {
        return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
    };

    let editSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    }

    useEffect(() => {
        let filterPokemons = search().sort(compare).slice(0, 5)
        setFoundPokemons(filterPokemons)
    }, [searchTerm])
    

    useEffect(() => {
        openfile();
    }, [])

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                {/* <SearchIcon/> */}
            </div>
            <InputBase
            onChange={editSearchTerm}
            placeholder="Search..."
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}/>
            {(searchTerm ? 
                <Dropdown pokemons={foundPokemons}/>
                :null
            )}
        </div>
    )
}