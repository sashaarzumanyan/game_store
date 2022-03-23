import React, { useState } from 'react'
import { Collapse, Grid, List, ListItemButton, ListItemIcon, ListItemText, Box, ListItem, Typography, IconButton } from '@mui/material'
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { setConfigsAction } from '../redux/actions';


const CategoryList = ({ headerName, info }) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
    const hendleSetConfigs = (id) => {
        dispatch(setConfigsAction(id))
        setOpen(!open)
    }
    return (
        <Box sx={{
            mb: 2,
            boxShadow: 2,
            borderRadius: 2,
            backgroundColor: 'primary.main',
            color: 'white',
            position: 'sticky'

        }} >
            <List >
                <ListItemButton onClick={handleClick}>
                    <IconButton
                        size="small"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <ListItemText primary={headerName} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} >
                    <List
                        component="div"
                    >
                        {info.map((e) =>
                            <ListItemButton key={e.id} onClick={() => hendleSetConfigs(e.id)}>
                                <ListItem sx={{ pl: 4 }}>
                                    <Typography color='text'>
                                        {e.name}
                                    </Typography>
                                </ListItem>
                            </ListItemButton>
                        )}
                    </List>
                </Collapse>
            </List>
        </Box >
    )
}

export default CategoryList