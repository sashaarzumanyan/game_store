import { Button, Container, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CategoryList from '../Components/CategoryList';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { getDevelopersMiddleware, getGenreMiddleware, getPlatformsMiddleware, getStoresMiddleware } from '../middlewares/getGameMiddleware';

const SideBar = () => {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const { genres,platforms } = useSelector(state => state)
    useEffect(() => {
        dispatch(getGenreMiddleware())
        dispatch(getStoresMiddleware())
        dispatch(getPlatformsMiddleware())
    }, [dispatch])
    return (
        <Box sx={{ position: 'sticky' }}>
            <Button
                sx={{width: '100%', mb: 2}}
                variant="outlined"
            >
                MUI GAMES
                
                    <SportsEsportsIcon color="primary" />
                
            </Button>
            <CategoryList headerName={'Genres'} info={genres} />
            {/* <CategoryList headerName={'Platforms'} info={platforms} /> */}
            {/* <CategoryList headerName={'Stores'} info={stores} /> */}
        </Box>
    )
}

export default SideBar