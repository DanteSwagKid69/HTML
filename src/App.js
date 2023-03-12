import "./App.css";
import SearchIcon from "./search.svg";
import { useEffect, useState } from "react";

import MovieCard from "./MovieCard";

//bc087197

const API_URL = "http://www.omdbapi.com?apikey=bc087197";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchterm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  const movie1 = {
    Title: "Spiderman",
    Year: "2010",
    imdbID: "tt1785572",
    Type: "movie",
    Poster: "N/A",
  };

  return (
    <div className="App">
      <h1>MovieLand</h1>
      <div className="search">
        <form>
          <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchterm(e.target.value)}
          />
        </form>
        <img
          src={SearchIcon}
          alt="Search icon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <>
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
