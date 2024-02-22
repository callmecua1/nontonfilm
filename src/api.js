import axios from "axios";


// const apiKey = process.env.REACT_APP_APIKEY
// const baseUrl = process.env.REACT_APP_BASEURL


export const getMovieList = async() => {
    const movie = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=80b85a4394f83ac7e5e56d91cb6d9d0b`)
    console.log({movieList: movie})
    return movie.data.results
}

export const searchMovies = async(q) => {
    const search = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${q}&api_key=80b85a4394f83ac7e5e56d91cb6d9d0b`)
    return search.data
}

