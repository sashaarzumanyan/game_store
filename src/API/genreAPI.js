import axios from "axios";
const urlKey =`aadfe25f71fd4bdf99cad9b1eba27299`

//API for getting genres list
export const genreApi = async() =>{
    const genres = await axios.get(`https://api.rawg.io/api/genres?key=${urlKey}`)
    return genres.data.results
}


//API for getting platforms list
export const platformsApi = async() =>{
    const platforms = await axios.get(`https://api.rawg.io/api/platforms?key=${urlKey}`)
    return platforms.data.results
}

//API for getting stores list
export const storesApi = async() =>{
    const stores = await axios.get(`https://api.rawg.io/api/stores?key=${urlKey}`)
    return stores.data.results
}