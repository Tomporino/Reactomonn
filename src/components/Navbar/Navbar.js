import {AppBar, Typography, Button, Toolbar} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';

const useStyles = makeStyles( (theme) => ({
    main: {
        backgroundColor: '#F44336',
        border: "solid black 5px"
    },
    link: {
        color: 'white',
        textDecoration: 'none'
    }
}))

export default function Navbar({loadPrevPage, loadNextPage}) {

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
                <SearchBar/>
            </Toolbar>
        </AppBar>
    )

}