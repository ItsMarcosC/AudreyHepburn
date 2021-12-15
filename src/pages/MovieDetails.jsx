import React from 'react';

const MovieDetails = ({title, cover, year, character, genre, summary, fact, toggleRenderDetails}) => {
  const handleClick = () => {
    toggleRenderDetails(false);
  }

  return (
    <div>
      <h2>{title}</h2>
      <img src={cover} alt="" />
      <h3>{year}</h3>
      <h3>{character}</h3>
      <h3>{genre}</h3>
      <h3>{summary}</h3>
      <h3>{fact}</h3>
      <button type='button' onClick={handleClick} >Hide Details</button>
      <button type='button'>Favorite</button>
    </div>
  );
}

export default MovieDetails;