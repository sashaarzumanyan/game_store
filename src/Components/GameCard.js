import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const GameCard = ({ name, image , hendleSelectGame,selectedGame}) => {
    
    return (
        <Card
            sx={{ height: '100%', fontFamily: 'Robot', boxShadow: '10' }}
            color='primary'
        >
            <CardMedia
                component="img"
                height="200"
                width='100%'
                image={image}
                alt={name}
            />
            <CardContent>
                <Typography variant="p" component="div">
                    {name}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to='/game' style={{ textDecoration: 'none' }}>
                    <Button variant="contained" size="small" onClick={() => hendleSelectGame(selectedGame)} >
                        Show Game
                    </Button>
                </Link>
                <Button variant="contained" size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default GameCard