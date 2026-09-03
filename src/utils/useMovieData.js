import { OPTIONS } from "../constant"
import moviesData from "../store/moviesStore"

const getNowPlayingMovies = async () => {   

    const {addMovieData} = moviesData.getState()

    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', OPTIONS)
    if(!response.ok) {
        return false
    }
    const movieList = await response.json();
    addMovieData(movieList?.results || [])    
    return true
}

export default getNowPlayingMovies;