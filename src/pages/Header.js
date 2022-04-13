import {
    AppBar,
    Button,
    Toolbar,
    Typography
} from '@mui/material'
import React from 'react'

const Header = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    MUI GAMES
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header