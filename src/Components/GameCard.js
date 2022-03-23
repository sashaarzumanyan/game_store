import { Button, Card, CardActions, CardContent, CardMedia, List, ListItem, Typography } from '@mui/material'
import React from 'react'

const GameCard = ({ name, image, id }) => {
    return (
        <Card
            sx={{ height: '100%', fontFamily: 'Robot' }}
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
                <Button variant="contained" size="small">Share</Button>
                <Button variant="contained" size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default GameCard