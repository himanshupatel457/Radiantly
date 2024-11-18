import React from 'react';

function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <img src={movie.image} alt={movie.movie} className="movie-card-img" />
            <div className="movie-card-body">
                <h2>{movie.movie}</h2>
                <p>Rating: {movie.rating}</p>
                <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
                    More Info
                </a>
            </div>
        </div>
    );
}

export default MovieCard;
