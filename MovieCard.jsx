// src/MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.image} alt={movie.movie} />
            <h3>{movie.movie}</h3>
            <p>Rating: {movie.rating}</p>
            <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
                View on IMDb
            </a>
        </div>
    );
};

export default MovieCard;
