import React, { useEffect } from 'react'
import GameCard from './GameCard'
import { useDispatch, useSelector } from "react-redux";
import { getGameMiddleware } from "../middlewares/getGameMiddleware";
import { Grid } from '@mui/material';
import ConfigForm from './ConfigForm';

const ListPage = () => {
    // const history = useHistory()
    const dispatch = useDispatch()
    const { list, configs: { genre, platform }} = useSelector(state => state)

    useEffect(() => {
        dispatch(getGameMiddleware())
    }, [dispatch, genre, platform])

    const hendleSelectGame = (value) => {
        dispatch({type: 'GET_SINGLE_GAME_OBJ', payload: value})
    }
    
    return (
        <>
            <ConfigForm />
            <Grid container spacing={2}>
                {list.map((e) => {
                    return <Grid key={e.id} item xs={4} >
                        <GameCard 
                            key={e.id}
                            name={e.name}
                            image={e.background_image}
                            selectedGame={e}
                            hendleSelectGame={hendleSelectGame}
                        />
                    </Grid>
                })}
            </Grid>
        </>
    )
}

export default ListPage