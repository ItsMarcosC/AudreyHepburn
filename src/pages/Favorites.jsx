// Import React and CSS
import React, { useState, useEffect } from 'react';
import  { Redirect } from 'react-router-dom';
import FavoriteCard from '../components/FavoriteCard';

// Import Components and Pages
import FilterMenu from '../components/FilterMenu';

const Favorites = ({ isLogged, favorites}) => {
  const [selectedFilter, setFilter] = useState('');
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

  switch (isLogged) {
    case false:
      return <Redirect to="/login" />
    default:
      return (
        <div>
        <FilterMenu 
          setFilter={setFilter} 
          selectedFilter={selectedFilter} 
          setFilteredFavorites={setFilteredFavorites} 
          favorites={favorites}
        />
        {filteredFavorites.map((element) => (
          <FavoriteCard 
            key={element.key}
            id={element.key}
            media={element.media}
            title={element.title}
          />
        ))}
        </div>
      );
  } 
}
export default Favorites;
