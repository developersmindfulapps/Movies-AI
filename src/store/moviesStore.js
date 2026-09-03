/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const moviesData = create(devtools((set) => ({
    moviesList: [],
    trailer: {},
    addMovieData: (movie) => set(() => ({ moviesList: movie })),
    addToTrailer: (movie) => set(() => ({ trailer: movie }))
}), { name: "Netflix App", store: "movies" }

))

export default moviesData;