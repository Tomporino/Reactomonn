import {AppBar, Typography, Button, Toolbar} from '@material-ui/core';
import {Link} from 'react-router-dom';

export default function Navbar({loadPrevPage, loadNextPage}) {

    return (
        <AppBar position="static">
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