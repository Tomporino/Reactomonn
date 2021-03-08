import {AppBar, Typography, Button, Toolbar} from '@material-ui/core';

export default function Navbar({loadNextPage, loadPrevPage}) {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>Reactomon</Typography>
                <Button>Prev</Button>
                <Button>Next</Button>
            </Toolbar>
        </AppBar>
    )

}