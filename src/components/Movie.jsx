// Import React and CSS
import React from 'react';

const Movie = ({refer, title, cover, toggleRenderDetails, setMovieOnDisplay, favorites, setFavorites}) => {
  const handleClick = ({ target: {value} }) => {
    setMovieOnDisplay(value);
    toggleRenderDetails(true);
  }

  const handleFavorites = ({ target: {value} }) => {
    const valid = favorites.filter((element) => element.key === value).length
    if (valid === 0) {
      setFavorites([
        ...favorites, {key: value}
      ])
    } else {
      setFavorites(favorites.filter((element) => element.key !== value))
    }
  }

  return (
    <div>
      <img src={cover} alt="" />
      <h2>{title}</h2>
      <button type='button' onClick={handleClick} value={refer} >Details</button>
      <button type='button'onClick={handleFavorites} value={refer} >Favorite</button>
    </div>
  );
}

export default Movie;