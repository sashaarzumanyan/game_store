const selectedGame = (state={}, action) => {
    switch (action.type) {
        case "GET_SINGLE_GAME_OBJ":
            return action.payload    
        default:
            return state
    }
}

export default selectedGame