// Import React and CSS
import React from 'react';
import { useHistory } from "react-router";

// Import Components and Pages

const Movie = ({movie, favorites, setFavorites, setMovie}) => {
  const history = useHistory();
  const handleClick = ({ target: {value} }) => {
    setMovie(value);
    history.push('/details')
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

export default Movie;

  