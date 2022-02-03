// Import React and CSS
import React, { useContext } from 'react';

// Import Components and Pages
import FavoritesContext from '../context/FavoritesContext';

const FavoriteCard = ({card }) => {
  const { favorites, setFavorites, filteredFavorites, setFilteredFavorites } = useContext(FavoritesContext);
  
  const handleClick = ({ target: {value} }) => {
    setFavorites(favorites.filter((element) => element.id !== value));
    setFilteredFavorites(filteredFavorites.filter((element) => element.id !== value));
  };

  return (
    <div>
      <h2>{card.title}</h2>
      <img src={card.cover} alt='' />
      <button type='button' onClick={handleClick} value={card.id}> Favorite</button>
    </div>
  );
}

export default FavoriteCard;
