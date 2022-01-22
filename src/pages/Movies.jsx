// Import React and CSS
import React from 'react';
import  { Redirect } from 'react-router-dom'

// Import Components and Pages
import AudreyMovies from '../data/data_movies';
import Movie from '../components/Movie';

const Movies = ({isLogged, setFavorites, favorites, setMovie}) => {
  const { movies } = AudreyMovies;

  switch (isLogged) {
    case false:
      return <Redirect to='/login' />
    default:
        return (
          movies.map((movie) => ( 
            <Movie 
              key={movie.id}
              movie={movie}
              setFavorites={setFavorites}
              favorites={favorites}
              setMovie={setMovie}
            />
          ))
        ); 
      } 
    }

export default Movies;
