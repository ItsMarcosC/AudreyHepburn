// Import React and CSS
import React, { useState, useEffect } from 'react';
import  { Redirect } from 'react-router-dom';

// Import Components and Pages
import FilterMenu from '../components/FilterMenu';

const Favorites = ({ isLogged, favorites, setFavorites}) => {
  const [selectedFilter, setFilter] = useState('');
  const [filteredFavorites, setFilteredFavorites] = useState([]);

  useEffect(() => {
    updateFavorites(selectedFilter);
  }, [selectedFilter, favorites])

  const updateFavorites = (selectedFilter) => {
    switch(selectedFilter){
      case 'Books': 
        return (
          setFilteredFavorites(favorites.filter((element) => element.media === 'book'))
        );
      case 'Movies':
        return (
          setFilteredFavorites(favorites.filter((element) => element.media === 'movie'))
        );
      case 'Readlist':
        return (
          setFilteredFavorites(favorites.filter((element) => element.media === 'readlist'))
        );
      default:
        return (
          setFilteredFavorites(favorites)
        );  
    }
  }
  
  switch (isLogged) {
    case false:
      return <Redirect to="/login" />
    default:
      if(selectedFilter === 'All') {
        return (
          <div>
            <FilterMenu setFilter={setFilter} />
          <h1>Audrey Hepburn</h1>
          </div>
        );
      } else {
        return (
          <div>
            <FilterMenu setFilter={setFilter} />
            <h1>Eliza Doolittle</h1>
          </div>
        ); 
      }
  } 
}

export default Favorites;
