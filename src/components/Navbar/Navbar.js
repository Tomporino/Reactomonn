import {AppBar, Typography, Button, Toolbar} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles( (theme) => ({
    main: {
        backgroundColor: 'red'
    }
}))

export default function Navbar({loadPrevPage, loadNextPage}) {

    const classes = useStyles();

    return (
        <AppBar className={classes.main} position="static">
            <Toolbar>
                <Link to="/">
                    <Typography>Reactomon</Typography>
                </Link>
                <Button onClick={loadPrevPage}>Prev</Button>
                <Button onClick={loadNextPage}>Next</Button>
            </Toolbar>
        </AppBar>
    )

}