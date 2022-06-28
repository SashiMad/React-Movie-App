import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./MovieList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=2cef477e";

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="container-fluid movie-app ">
      <div className="row ">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
