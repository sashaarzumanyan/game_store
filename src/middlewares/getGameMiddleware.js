import { setDeveloperList, setGameList, setGenerList, setPlatformsList, setStoresList } from "../redux/actions"
import { gamesApi } from '../API/gamesAPI'
import { developersApi, genreApi, platformsApi, storesApi } from "../API/genreAPI"


export const getGameMiddleware = () => {
    return (dispatch, getState) => {
        const { configs: { genre} } = getState()
        gamesApi(genre).then((game) => {
            return dispatch(setGameList(game))
        })
    }
}

export const getGenreMiddleware = () => {
    return (dispatch, getState) =>
        genreApi().then((genres) => {
            return dispatch(setGenerList(genres))
        })
}

export const getPlatformsMiddleware = () => {
    return (dispatch, getState) =>
        platformsApi().then((platforms) => {
            return dispatch(setPlatformsList(platforms))
        })
}

export const getStoresMiddleware = () => {
    return (dispatch, getState) =>
        storesApi().then((stores) => {
            return dispatch(setStoresList(stores))
        })
}