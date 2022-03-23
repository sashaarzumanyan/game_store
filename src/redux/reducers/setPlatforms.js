
const setPlatforms = (state = [], action) => {
    switch (action.type) {
        case "SET_PLATFORMS_LIST":
            return action.payload
        default:
            return state
    }
}
export default setPlatforms