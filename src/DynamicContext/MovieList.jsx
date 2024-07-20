import React, { useContext } from 'react';
import MovieContext from './MovieContext';
import './MovieList.css'; // Import the CSS file

const MovieList = () => {
    const { movies } = useContext(MovieContext);
    return (
        <div className="movie-list-container">
            {movies.map(item => (
                <div key={item.name} className="movie-item">
                    <h1>{item.name}</h1>
                    <img src={item.image} alt={item.name} width="200px" />
                    <p>Rating: {item.rating}</p>
                </div>
            ))}
        </div>
    );
}

export default MovieList;
