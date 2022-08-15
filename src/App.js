import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLodaing, setIsLodaing] = useState(false);

  const fetchMoviesHandler = async () => {
    setIsLodaing(true);
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        description: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformedMovies);
    setIsLodaing(false);
  };

  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: "Some Dummy Movie",
  //     openingText: "This is the opening text of the movie",
  //     releaseDate: "2021-05-18",
  //   },
  //   {
  //     id: 2,
  //     title: "Some Dummy Movie 2",
  //     openingText: "This is the second opening text of the movie",
  //     releaseDate: "2021-05-19",
  //   },
  // ];

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLodaing && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLodaing && movies.length === 0 && <p>Found no movies.</p>}
        {isLodaing && <p>Lodaing...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
