/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const moviesData = create(devtools((set) => ({
    moviesList: {},
    trailer: {},
    addMovieData: (movie) => (() => ({ moviesList: movie })),
    addToTrailer: (movie) => (() => ({ trailer: movie }))
})))

export default moviesData;