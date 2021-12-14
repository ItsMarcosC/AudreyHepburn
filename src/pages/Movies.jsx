import React from 'react';
import  { Redirect } from 'react-router-dom'

const Movie = ({isLogged}) => {
  return (
    <div className="App">
      { isLogged ? <h1>Movie Page</h1> : <Redirect to="/login"/>}
    </div>
  );
}

export default Movie;
