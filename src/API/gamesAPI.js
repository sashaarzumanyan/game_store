import axios from "axios";
const urlKey =`aadfe25f71fd4bdf99cad9b1eba27299`


//API for getting games list
export const gamesApi = async(genre, platforms, page_size=20, page=1) =>{
    const games = await axios.get(`https://api.rawg.io/api/games?key=${urlKey}&page=${page}&page_size=${page_size}&genres=${genre}`)
    return games.data.results
}