// Import React and CSS
import React from 'react';

// Import Components and Pages
import AudreyMovies from '../data/data_movies';

const MovieDetails = ({refer, title, cover, year, character, genre, summary, fact, favorites, setFavorites, toggleRenderDetails}) => {
  const { movies } = AudreyMovies;

  const handleClick = () => {
    toggleRenderDetails(false);
  }
  
  const handleFavorites = ({ target: {value} }) => {
    const valid = favorites.filter((element) => element.key === value).length
    if (valid === 0) {
      setFavorites([
        ...favorites, {key: value, media: 'movie', info: movies.filter((element) => element.refer === value )} 
      ])
    } else {
      setFavorites(favorites.filter((element) => element.key !== value))
    }
  }

  return (
    <div>
      <h2>{title}</h2>
      <img src={cover} alt="" />
      <h3>{year}</h3>
      <h3>{character}</h3>
      <h3>{genre}</h3>
      <h3>{summary}</h3>
      <h3>{fact}</h3>
      <button type='button' onClick={handleClick} value={refer} >Hide Details</button>
      <button type='button' onClick={handleFavorites} value={refer} >Favorite</button>
    </div>
  );
}

export default MovieDetails;