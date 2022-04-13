import {combineReducers} from 'redux'
import { setConfigs } from './setConfigs'
import setGenres from './setGenres'
import getGamesResult from './setGames'
import setPlatforms from './setPlatforms'
import setStores from './setStores'
import selectedGame from './selectedGame'

export const rootReducer = combineReducers({
    list: getGamesResult,
    genres: setGenres,
    configs: setConfigs,
    platforms: setPlatforms,
    stores: setStores,
    selectedGame: selectedGame,
})