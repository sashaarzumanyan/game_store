import React, { useState } from 'react'
import {
    Collapse,
    List,
    ListItemButton,
    ListItemText,
    Box,
    ListItem,
    Typography,
    IconButton
} from '@mui/material'
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import MenuIcon from '@mui/icons-material/Menu';



const CategoryList = ({ headerName, info, hendleSetConfigs }) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
    const handleClose = () => {
        setOpen(!open)
    }
    return (
        <Box sx={{
            mb: 2,
            boxShadow: 2,
            borderRadius: 2,
            backgroundColor: 'primary.main',
            color: 'white',
            width: '80%',
            overflow: 'auto',
            whiteSpace: 'initial',
            height: open ? '30vh' : null
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
                                <ListItem onClick={handleClose} sx={{ pl: 4 }}>
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