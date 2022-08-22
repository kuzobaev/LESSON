import React, { useState, useEffect } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLodaing, setIsLodaing] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchMoviesHandler = async () => {
    try {
      setErrorMessage(null);
      setIsLodaing(true);
      const response = await fetch(
        "https://movie-db-3ab76-default-rtdb.firebaseio.com/movies.json"
      );
      const data = await response.json();
   
      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          description: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setErrorMessage(error.message);
    }
    setIsLodaing(false);
  };
  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (errorMessage) {
    content = <p style={{ color: "red" }}>{errorMessage}</p>;
  }

  if (isLodaing) {
    content = <p>Lodaing...</p>;
  }

  const addMovieHandler = async (movie) => {
      await fetch(
      "https://movie-db-3ab76-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    await fetchMoviesHandler();
    setIsLodaing(false);
  };

  return (
    <React.Fragment>
      {errorMessage && (
        <section>
          <button onClick={fetchMoviesHandler}>Try again</button>
        </section>
      )}
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
