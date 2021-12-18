// Import React and CSS
import React from 'react';

// Import Components and Pages

const Movie = ({id, media, title, cover, toggleRenderDetails, setMovieOnDisplay, favorites, setFavorites}) => {
  const handleClick = ({ target: {value} }) => {
    setMovieOnDisplay(value);
    toggleRenderDetails(true);
  }

  const handleFavorites = ({ target: {value} }) => {
    const valid = favorites.filter((element) => element.key === value).length
    if (valid === 0) {
      setFavorites([
        ...favorites, {key: value, media: media, title: title} 
      ])
    } else {
      setFavorites(favorites.filter((element) => element.key !== value))
    }
  }

  return (
    <div>
      <img src={cover} alt="" />
      <h2>{title}</h2>
      <button type='button' onClick={handleClick} value={id} >Details</button>
      <button type='button'onClick={handleFavorites} value={id} >Favorite</button>
    </div>
  );
}

export default Movie;
