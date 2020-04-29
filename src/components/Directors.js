import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(directors => <div>
          Name: {directors.name}
          <br></br>
          Movies: {directors.movies.map(movies=> <ul>{movies}</ul>)}
        </div>)}
    </div>
  );
}

export default Directors
