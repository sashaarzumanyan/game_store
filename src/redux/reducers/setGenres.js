
const setGenres = (state = [], action) => {
    switch (action.type) {
        case "SET_GENRE_LIST":
            return action.payload
        default:
            return state
    }
}
export default setGenres