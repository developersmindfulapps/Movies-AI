import moviesData from "../store/moviesStore";
import fetchTrailer from "../utils/trailerDataFetch";
import Hero from "./Hero";
import MovieName from "./MovieName";

const Browse = () => {
  const movies = moviesData(state => state.moviesList)
  fetchTrailer(movies[0].id);
  return (
    <div><Hero />
    <MovieName/>
    </div>
  )
}

export default Browse