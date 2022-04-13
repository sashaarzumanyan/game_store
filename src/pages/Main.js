import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import GamePage from '../Components/GamePage'
import ListPage from '../Components/ListPage'

const Main = () => {
    const { selectedGame } = useSelector(state => state)
    return (
        <Box >
            <Routes>
                <Route>
                    <Route path="/" element={<ListPage />} />
                    <Route path='game' element={<GamePage game={selectedGame} />} />
                </Route>
            </Routes>
        </Box>
    )
}

export default Main