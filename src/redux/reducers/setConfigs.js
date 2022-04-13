export const setConfigs = (state={genre:'5', platform: '1', store: '1'}, action) => {
    switch (action.type) {
        case "SET_CONFIGS":
            return {
                ...state,
                ...action.payload
            }
    
        default:
            return state
    }
}