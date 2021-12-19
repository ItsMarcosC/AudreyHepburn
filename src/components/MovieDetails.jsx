// Import React and CSS
import React from 'react';

// Import Components and Pages

const MovieDetails = ({movie, favorites, setFavorites, toggleRenderDetails}) => {
  const handleClick = () => {
    toggleRenderDetails(false);
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
      <h2>{movie.title}</h2>
      <img src={movie.cover} alt="" />
      <h3>{movie.year}</h3>
      <h3>{movie.character}</h3>
      <h3>{movie.genre}</h3>
      <h3>{movie.summary}</h3>
      <h3>{movie.fact}</h3>
      <button type='button' onClick={handleClick} value={movie.id} >Hide Details</button>
      <button type='button' onClick={handleFavorites} value={movie.id} >Favorite</button>
    </div>
  );
}

export default MovieDetails;
