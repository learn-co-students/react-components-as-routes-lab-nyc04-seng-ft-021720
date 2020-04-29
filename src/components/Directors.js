import React from 'react';
import { directors } from '../data';

const Directors = () => {

const handleDirectors = () => {
  return directors.map(director => {
    return (
      <div>
        <h3>{director.name}</h3>
        <ul>
          {director.movies.map(movie=>{
            return <li>{movie}</li>
          })}
        </ul>
      </div>
    )
  })
}

  return (
    <div>
      <h1>Directors Page</h1>
      {handleDirectors()}
    </div>
  );
}

export default Directors
