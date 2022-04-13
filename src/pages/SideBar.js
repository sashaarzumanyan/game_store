import { Button, Box } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CategoryList from '../Components/CategoryList';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { getGenreMiddleware, getPlatformsMiddleware, getStoresMiddleware } from '../middlewares/getGameMiddleware';
import { setConfigsAction, setPlatformsAction } from '../redux/actions';

const SideBar = () => {
    const dispatch = useDispatch()
    const { genres, platforms, stores } = useSelector(state => state)

    const hendleSetConfigs = (id) => {
        dispatch(setConfigsAction({ genre: id }))
    }
    const hendleSetPlatforms = (id) => {
        dispatch(setPlatformsAction({ platform: id }))
    }
    const hendleSetStore = (id) => {
        dispatch(setPlatformsAction({ store: id }))
    }


    useEffect(() => {
        dispatch(getGenreMiddleware())
        dispatch(getStoresMiddleware())
        dispatch(getPlatformsMiddleware())
    }, [dispatch])
    return (
        <Box sx={{ width: "100%"}} >
            <Button
                sx={{ width: '80%', mb: 2, color: 'white' }}
                variant="outlined"
            >
                MUI GAMES
                <SportsEsportsIcon color="primary" />

            </Button>
            <CategoryList headerName={'Genres'} info={genres} hendleSetConfigs={hendleSetConfigs} />
            <CategoryList headerName={'Platforms'} info={platforms} hendleSetConfigs={hendleSetPlatforms} />
            <CategoryList headerName={'Stores'} info={stores} hendleSetConfigs={hendleSetStore} />
        </Box>
    )
}

export default SideBar