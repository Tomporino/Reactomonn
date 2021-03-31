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
        border: 'solid black 2px',
        borderRadius: '100px',
        backgroundColor: 'blue',
        height: '50px',
        width: '50px'
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
                    <Typography>Catched</Typography>
                </Link>
                <Button className={classes.text} onClick={loadPrevPage}>Prev</Button>
                <Button className={classes.text} onClick={loadNextPage}>Next</Button>
                <SearchBar/>
            </Toolbar>
        </AppBar>
    )

}