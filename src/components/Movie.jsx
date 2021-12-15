import React from 'react';

const Movie = ({title, cover}) => {
  return (
    <div>
      <img src={cover} alt="" />
      <h2>{title}</h2>
      <button type='button'>Details</button>
      <button type='button'>Favorite</button>
    </div>
  );
}

export default Movie;