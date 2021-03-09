import {AppBar, Typography, Button, Toolbar} from '@material-ui/core';

export default function Navbar({loadPrevPage, loadNextPage}) {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>Reactomon</Typography>
                <Button onClick={loadPrevPage}>Prev</Button>
                <Button onClick={loadNextPage}>Next</Button>
            </Toolbar>
        </AppBar>
    )

}