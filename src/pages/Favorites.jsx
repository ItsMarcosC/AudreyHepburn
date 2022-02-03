// Import React and CSS
import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import  { Redirect } from 'react-router-dom';
import FavoriteCard from '../components/FavoriteCard';

// Import Components and Pages
import FavoritesContext from '../context/FavoritesContext';
import FilterMenu from '../components/FilterMenu';

const Favorites = ({ loginStatus }) => {
  const { filteredFavorites, favorites, setFilteredFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    setFilteredFavorites(favorites);
  }, []);

  switch (loginStatus) {
    case false:
      return <Redirect to="/login" />
    default:
      return (
        <div>
        <FilterMenu/>
        {filteredFavorites.map((element) => (
          <FavoriteCard 
            key={element.id}
            card={element}
          />
        ))}
        </div>
      );
  } 
}

const mapStateToProps = (state) => ({
  loginStatus: state.login.isLogged,
});

export default connect(mapStateToProps)(Favorites);
