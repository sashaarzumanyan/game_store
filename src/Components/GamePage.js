import { Box, Card, CardMedia, Chip, Divider, Grid, List, ListItem, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { platformsApi } from '../API/genreAPI'
import ChartPie from './Chart'

const GamePage = ({ game }) => {
  const { background_image,
    slug,
    name,
    released,
    platforms,
    genres,
    stores,
    ratings } = game
  // debugger
  return (
    <>
      <Paper sx={{ width: "100%" }} >
        <Card>
          <CardMedia
            component="img"
            height="350px"
            width='100%'
            image={background_image}
            alt={slug}
          />
        </Card>
        <Typography variant='h4'>{name}</Typography>
        <Divider variant="middle" width='80%' />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <List>
            <ListItem >
              Released:
              <Chip variant="outlined" label={released} />
            </ListItem>
            <ListItem sx={{ display: 'block' }}>
              Platforms:
              {platforms.map((e) => <Chip variant="outlined" label={e.platform.name} />)}
            </ListItem>
            <ListItem >
              Genres:
              {genres.map((e) => <Chip variant="outlined" label={e.name} />)}
            </ListItem>
            <ListItem sx={{ display: 'block' }}>
              Stores:
              {stores.map((e) => <Chip variant="outlined" label={e.store.name} />)}
            </ListItem>
          </List>
          <List>
            <ChartPie ratings={ratings} />
          </List>
        </Box>
      </Paper>
    </>
  )
}

export default GamePage