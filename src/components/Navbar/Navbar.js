import {AppBar, Typography, Button, Toolbar, InputBase} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {makeStyles, fade} from '@material-ui/core/styles';
import { useState, useEffect } from 'react';

const useStyles = makeStyles( (theme) => ({
    main: {
        backgroundColor: 'red'
    },
    link: {
        color: 'white',
        textDecoration: 'none'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
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

export default function Navbar({loadPrevPage, loadNextPage}) {

    const [pokemons, setPokemons] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")

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

    let editSearchTerm = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm)
        console.log(search())
    }
    
    let search = () => {
        return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
    };

    useEffect(() => {
        openfile()
    }, [])

    const classes = useStyles();

    return (
        <AppBar className={classes.main} position="static">
            <Toolbar>
                <Link className={classes.link} to="/">
                    <Typography>Reactomon</Typography>
                </Link>
                <Link className={classes.link} to="/catched">
                    <Typography>Catched</Typography>
                </Link>
                <Button className={classes.text} onClick={loadPrevPage}>Prev</Button>
                <Button className={classes.text} onClick={loadNextPage}>Next</Button>
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
                </div>
            </Toolbar>
        </AppBar>
    )

}