// Import React and CSS
import React, { useContext } from 'react';
import { useHistory } from "react-router";
import { connect } from 'react-redux';

// Import Components and Pages
import FavoritesContext from '../context/FavoritesContext';
import { setOnDisplay } from '../redux/actions';


const Movie = ({movie, onDisplay}) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const history = useHistory();
  
  const handleClick = ({ target: {value} }) => {
    onDisplay(value);
    history.push('/MovieDetails')
  }

  const handleFavorites = ({ target: {value} }) => {
    const valid = favorites.filter((element) => element.id === value).length
    if (valid === 0) {
      setFavorites([
        ...favorites, 
        { id: value, 
        media: movie.media, 
        title: movie.title, 
        cover: movie.cover, 
        year: movie.year, 
        character: movie.character, 
        genre: movie.genre, 
        summary: movie.summary, 
        fact: movie.fact}
      ])
    } else {
      setFavorites(favorites.filter((element) => element.id !== value))
    }
  }

  return (
    <div>
      <img src={movie.cover} alt="" />
      <h2>{movie.title}</h2>
      <button type='button' onClick={handleClick} value={movie.id} >Details</button>
      <button type='button'onClick={handleFavorites} value={movie.id} >Favorite</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onDisplay:(element) => dispatch(setOnDisplay(element))
});

export default connect(null, mapDispatchToProps)(Movie);
