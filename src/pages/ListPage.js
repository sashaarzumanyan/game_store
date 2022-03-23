import React, { useEffect } from 'react'
import GameCard from '../Components/GameCard'
import { useDispatch, useSelector } from "react-redux";
import { getGameMiddleware } from "../middlewares/getGameMiddleware";
import { Grid } from '@mui/material';

const ListPage = () => {
    // const history = useHistory()
    const dispatch = useDispatch()
    const {list,configs} = useSelector(state => state)
    useEffect(() => {
        dispatch(getGameMiddleware())
    }, [dispatch,configs])
    return (
        <Grid container spacing={2}>
            {list.map((e) => {
                return <Grid key={e.id} item xs={4} >
                    <GameCard key={e.id} name={e.name} image={e.background_image} />
                </Grid>
            })}
        </Grid>
        
    )
}

export default ListPage