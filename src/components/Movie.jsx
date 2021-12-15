import React from 'react';
import { Redirect } from 'react-router-dom';

const Movie = ({character, title, cover}) => {
  const showDetails = ({target}) => {
  const { value } = target;  
    console.log(value);
    // <Redirect to={`/moviedetails/${title}`} />
  }
  return (
    <div>
      <img src={cover} alt="" />
      <h2>{title}</h2>
      <button type='button' onClick={showDetails} value={title}>Details</button>
      <button type='button'>Favorite</button>
    </div>
  );
}

export default Movie;