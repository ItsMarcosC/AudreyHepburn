// Import React and CSS
import React from 'react';

// Import Components and Pages

const FavoriteCard = ({favorite, favorites, setFavorites}) => {
  const handleClick = ({ target: {value} }) => {
    setFavorites(favorites.filter((element) => element.title !== value))
  }
  return (
    <div>
      <h2>{favorite.title}</h2>
      <img src={favorite.cover} alt='' />
      <button type='button' onClick={handleClick} value={favorite.title}> Favorite</button>
    </div>
  );
}

export default FavoriteCard;
