import moviesData from "../store/moviesStore"

const MovieName = () => {
    const movieMeta = moviesData((state) => state.moviesList);
    const {title, overview} = movieMeta[0]
  return (
    <div className="absolute top-0bg-linear-to-r from-black relative grid gap-2.5 text-white w-[70%] p-4 my-[20%]">
        <span className="text-2xl font-extrabold">{title}</span>
        <span className="line-clamp-2">{overview}</span>
        <div>
        <button className="text-white bg-red-500 p-2 px-8 rounded cursor-pointer hover:opacity-85">

           Play
        </button>
        </div>
    </div>
  )
}

export default MovieName