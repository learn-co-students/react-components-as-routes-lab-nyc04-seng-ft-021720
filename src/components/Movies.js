import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const handleMovies = () => {
    return movies.map(movie => {
      console.log(movie)
    return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.time} minutes </p>
      <ul>
        {movie.genres.map(genre => {
          return <li>{genre}</li>
        })}
      </ul>
      </div>
    )})
  }

  return (
    <div>
      <h1>Movies Page</h1>
        {handleMovies()}
    </div>
  );
};

export default Movies;
