export const setConfigs = (state={genre:'5'}, action) => {
    switch (action.type) {
        case "SET_CONFIGS":
            return {
                ...state,
                genre: action.payload
            }
    
        default:
            return state
    }
}