// Import React and CSS
import React from 'react';

// Import Components and Pages

const FavoriteCard = ({card, favorites, setFavorites}) => {
  const handleClick = ({ target: {value} }) => {
    setFavorites(favorites.filter((element) => element.id !== value))
  }
  return (
    <div>
      <h2>{card.title}</h2>
      <img src={card.cover} alt='' />
      <button type='button' onClick={handleClick} value={card.id}> Favorite</button>
    </div>
  );
}

export default FavoriteCard;
