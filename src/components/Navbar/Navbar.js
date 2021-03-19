import {AppBar, Typography, Button, Toolbar} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles( (theme) => ({
    main: {
        backgroundColor: 'red'
    },
    text: {
        color: 'white'
    }
}))

export default function Navbar({loadPrevPage, loadNextPage}) {

    const classes = useStyles();

    return (
        <AppBar className={classes.main} position="static">
            <Toolbar>
                <Link to="/">
                    <Typography className={classes.text}>Reactomon</Typography>
                </Link>
                <Link to="/catched">
                    <Typography className={classes.text}>Catched</Typography>
                </Link>
                <Button className={classes.text} onClick={loadPrevPage}>Prev</Button>
                <Button className={classes.text} onClick={loadNextPage}>Next</Button>
            </Toolbar>
        </AppBar>
    )

}