import React from 'react';
import AudreyMovies from '../data/data_movies';
import MovieDetails from '../components/MovieDetails';

const Mdetails = (movieD, favorites, setFavorites) => {
  const { movies } = AudreyMovies;
  return (
    movies.filter((movie) => movie.id === movieD.movie)
    .map((movie) => (
      <div key={movie.id}>
      <MovieDetails 
        movie={movie}
        favorites={movieD.favorites}
        setFavorites={movieD.setFavorites}
      />
      </div>
    ))
  );
}

export default Mdetails;
