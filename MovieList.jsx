// src/MovieList.js
import React from 'react';
import MovieCard from './MovieCard';

const movies = [
    { id: 1, movie: "The Shawshank Redemption", rating: 9.2, image: "images/shawshank.jpg", imdb_url: "https://www.imdb.com/title/tt0111161/" },
    { id: 2, movie: "The Godfather", rating: 9.2, image: "images/godfather.jpg", imdb_url: "https://www.imdb.com/title/tt0068646/" },
    { id: 3, movie: "The Dark Knight", rating: 9, image: "images/dark_knight.jpg", imdb_url: "https://www.imdb.com/title/tt0468569/" },
];

const MovieList = () => {
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
