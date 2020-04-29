import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movies => <div>
          Title: {movies.title}
          <br></br>
          Time: {movies.time}
          <br></br>
          Genre: {movies.genres.map(genres=> <ul>{genres}</ul>)}
        </div>)}
    </div>
  );
};

export default Movies;
