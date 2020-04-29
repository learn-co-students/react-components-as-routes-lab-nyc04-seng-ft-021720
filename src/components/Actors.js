import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actors => <div>
          Actor: {actors.name}
          <br></br>
          Movies: {actors.movies.map(movies=> <ul>{movies}</ul>)}
        </div>)}
    </div>
  );
};

export default Actors;
