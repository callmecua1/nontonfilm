import { useState, useEffect } from "react";
import "./App.css";
import { event } from "jquery";
import { getMovieList, searchMovies } from "./api.js";
import axios from "axios";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  // const search = async (q) => {
  //   const query = await searchMovies(q)
  //   console.log({query : query})
  // };

  const search = async (q) => {
    if(q.length > 1){
      const query = await searchMovies(q)
      setPopularMovies(query.results)
    }else {
      popularMovies
    }
  }


  
  const PopularMoviesLists = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="film-wrapper" key={i}>
          <img className="movie-image" src={`${'https://image.tmdb.org/t/p/w500'}/${movie.poster_path}`} alt="" />
          <div className="movie-title">{movie.title}</div>
          {/* <div className="movie-date">{movie.release_date}</div> */}
          <div className="movie-rate">{movie.vote_average}</div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="header">
        <h1>Movies with me</h1>
      </div>

      <div className="movie-wrapper">
        <input
          type="text"
          placeholder="Cari Film "
          className="searchbox"
          onChange={({ target }) => search(target.value)}
        />

        <div className="movie-container">
          <PopularMoviesLists />
        </div>
      </div>
    </>
  );
};

export default App;
