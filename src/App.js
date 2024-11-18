  import React, { useState, useEffect } from "react";
  import axios from "axios";
  import MovieList from "./MovieList"; 

  function App() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const response = await axios.get("https://dummyapi.online/api/movies");
          console.log(response.data[0].image);
          setMovies(response.data);
        } catch (err) {
          setError("Failed to fetch movies.");
        } finally {
          setLoading(false);
        }
      };

      fetchMovies();
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div className="App">
        <h1>Movie List</h1>
        <MovieList movies={movies} /> 
      </div>
    );
  }

  export default App;
