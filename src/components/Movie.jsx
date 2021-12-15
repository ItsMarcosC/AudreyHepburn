// Import React and CSS
import React from 'react';

const Movie = ({refer, title, cover, toggleRenderDetails, setMovieOnDisplay}) => {
  const handleClick = ({ target : { value } }) => {
    setMovieOnDisplay(value);
    toggleRenderDetails(true);
  }

  return (
    <div>
      <img src={cover} alt="" />
      <h2>{title}</h2>
      <button type='button' onClick={handleClick} value={refer} >Details</button>
      <button type='button'>Favorite</button>
    </div>
  );
}

export default Movie;