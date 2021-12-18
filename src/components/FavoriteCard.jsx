// Import React and CSS
import React from 'react';

// Import Components and Pages

const FavoriteCard = ({id, media, title, favorites, setFavorites}) => {
  const handleClick = (e) => {
    e.preventDefault();
    setFavorites(favorites.filter((element) => element.key !== e.target.value))
  }
  return (
    <div>
      <h2>{title}</h2>
      <h2>{media}</h2>
      <h2>{id}</h2>
      <button type='button' onClick={handleClick} value={id}> Favorite</button>
    </div>
  );
}

export default FavoriteCard;
