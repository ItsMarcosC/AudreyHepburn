// Import React and CSS
import React, { useState } from 'react';
import  { Redirect } from 'react-router-dom'

// Import Components and Pages
import AudreyMovies from '../data/data_movies';
import Movie from '../components/Movie';
import MovieDetails from '../components/MovieDetails';

const Movies = ({isLogged, setFavorites, favorites}) => {
  const [renderDetails, toggleRenderDetails] = useState(false);
  const [movieOnDisplay, setMovieOnDisplay] = useState('');
  const { movies } = AudreyMovies;

  switch (isLogged) {
    case false:
      return <Redirect to='/login' />
    default:
      if (renderDetails === false){
        return (
          movies.map((movie) => ( 
            <Movie 
              key={movie.id}
              id={movie.id}
              title={movie.title}
              cover={movie.cover}
              media={movie.media}
              toggleRenderDetails={toggleRenderDetails}
              setMovieOnDisplay={setMovieOnDisplay}
              setFavorites={setFavorites}
              favorites={favorites}
            />
          ))
        ); 
      } else {
        return (
          movies.filter((movie) => movie.id === movieOnDisplay)
          .map((movie) => (
            <MovieDetails 
              key={movie.id}
              id={movie.id}
              title={movie.title}
              cover={movie.cover}
              year={movie.year}
              character={movie.character}
              genre={movie.genre}
              summary={movie.summary}
              fact={movie.fact}
              media={movie.media}
              toggleRenderDetails={toggleRenderDetails}
              setFavorites={setFavorites}
              favorites={favorites}
            />
          ))
        );
      }
  }
}

export default Movies;
