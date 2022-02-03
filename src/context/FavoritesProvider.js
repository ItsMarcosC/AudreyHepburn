import React, { useState, useEffect } from 'react';
import FavoritesContext from './FavoritesContext';

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [selectedFilter, setFilter] = useState('All');
  const [filteredFavorites, setFilteredFavorites] = useState([]);
  
  useEffect(() => {
    filterHandler();
  }, [selectedFilter]); 

  const filterHandler = () => {
    switch(selectedFilter){
      case 'Movies':
        setFilteredFavorites(favorites.filter(element => element.media === 'movie'))
        break;
      case 'Books':
      setFilteredFavorites(favorites.filter(element => element.media === 'book'))
      break;
      case 'Readlist':
        setFilteredFavorites(favorites.filter(element => element.media === 'audreyReadlist'))
        break;
      default:
        setFilteredFavorites(favorites);
        break;
    }
  }

  const context = {
    favorites,
    setFavorites,
    selectedFilter,
    setFilter,
    filteredFavorites,
    setFilteredFavorites,
  }
  return (
    <main>
      <FavoritesContext.Provider value={ context }>
        {children}
      </FavoritesContext.Provider>
    </main>
  );
}

export default FavoritesProvider;
