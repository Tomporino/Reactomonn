import {AppBar, Typography, Button, Toolbar} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles( (theme) => ({
    main: {
        backgroundColor: '#F44336',
        borderBottom: "solid black 5px",
        borderTop: "solid black 5px"
    },
    link: {
        color: 'white',
        textDecoration: 'none'
    },
    bigbutton: {
        border: 'solid white 2px',
        borderRadius: '100px',
        backgroundColor: 'blue',
        height: '50px',
        width: '50px',
        margin: '10px'
    },
    themebutton: {
        border: 'solid black 1px',
        borderRadius: '100px',
        backgroundColor: 'red',
        height: '20px',
        width: '20px',
        margin: '10px'
    },
    prevbutton: {
        border: 'solid black 1px',
        borderRadius: '100px',
        backgroundColor: 'yellow',
        height: '20px',
        width: '20px',
        margin: '10px'
    },
    nextbutton: {
        border: 'solid black 1px',
        borderRadius: '100px',
        backgroundColor: 'green',
        height: '20px',
        width: '20px',
        margin: '10px'
    }

}))

export default function Navbar({loadPrevPage, loadNextPage}) {

    const classes = useStyles();

    return (
        <AppBar className={classes.main} position="static">
            <Toolbar>
                <Link className={classes.link} to="/">
                    <div className={classes.bigbutton}/>
                </Link>
                <Link className={classes.link} to="/catched">
                    <div className={classes.themebutton}/>
                </Link>
                <div className={classes.prevbutton} onClick={loadPrevPage}/>
                <div className={classes.nextbutton} onClick={loadNextPage}/>
                <SearchBar/>
            </Toolbar>
        </AppBar>
    )

}