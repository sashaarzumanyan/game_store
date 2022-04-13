export const setGameList = (games) => {
    return{
        type: "SET_GAME_LIST",
        payload: games
    }
}

export const setGenerList = (genres) => {
    return{
        type: "SET_GENRE_LIST",
        payload: genres
    }
}


export const setPlatformsList = (platforms) => {
    return{
        type: "SET_PLATFORMS_LIST",
        payload: platforms
    }
}


export const setStoresList = (stores) => {
    return{
        type: "SET_STORES_LIST",
        payload: stores
    }
}

export const setConfigsAction = (configs) => {
    return{
        type: "SET_CONFIGS",
        payload: configs
    }
}

export const setPlatformsAction = (configs) => {
    return{
        type: "SET_CONFIGS",
        payload: configs
    }
}

export const setFilter = () => {
    return {
        type: "SET_FILTER"
    }
}