import { useEffect } from "react";
import { OPTIONS } from "../constant";
import moviesData from "../store/moviesStore";


const useFetchTrailer = (id = '') => {
    
    const trailer = async () => {
        const { addToTrailer } = moviesData.getState();
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
            OPTIONS,
        );

        if (!response) return;

        const sorted = await response.json();
        const filtered = sorted.results.filter((item) => item.type == "Trailer");
        addToTrailer(filtered[0]);
        return true
    }

    useEffect(() => {
        trailer()
    }, [])
};

export default useFetchTrailer;