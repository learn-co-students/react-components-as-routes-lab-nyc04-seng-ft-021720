import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const handleActors = () => {
    return actors.map((actor => {
      console.log(actor)
      return (
      <div className="actor">
        {actor.name}`
        <ul> {actor.movies.map(movie => {
          return (
            <li>{movie}</li>
          )
        })
      }
      </ul>
      </div>
    )}
    ))
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {handleActors()}
    </div>
  );
};

export default Actors;
