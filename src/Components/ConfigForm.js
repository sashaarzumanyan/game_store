import React from 'react'
import { Box, Stack, Chip,  Divider, Button  } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../redux/actions'

const ConfigForm = () => {
    const dispatch = useDispatch()
    const {configs: { genre, platform, store } ,genres, platforms, stores} = useSelector(state => state)

    const configArray = genres.filter(e => e.id == genre)
    configArray.push(...platforms.filter(e => e.id == platform))
    configArray.push(...stores.filter(e => e.id == store))
    const [genreName, platformName, storeName] = configArray
  return (    
        <Box sx={{ mb: 2 }}>
                <Stack sx={{mb: 2}} direction="row" spacing={1}>
                    <Chip label={`Genre: ` + genreName?.name} color="primary" />
                    <Chip label={`Platform: ` +platformName?.name} color="success" />
                    <Chip label={ `Store: ` +storeName?.name} color="error" />
                </Stack>
            <Divider />
        </Box>
        )
}

export default ConfigForm