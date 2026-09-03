import { OPTIONS } from "../constant"

const getNowPlayingMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', OPTIONS)
    if(!response.ok) {
        return false
    }
    return response.json()
}

export default getNowPlayingMovies;