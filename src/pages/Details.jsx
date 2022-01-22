import React from 'react';
import AudreyMovies from '../data/data_movies';
import MovieDetails from '../components/MovieDetails';

const Details = (movieD, favorites, setFavorites) => {
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

export default Details;


// const Details = (movieOnShow) => {
//   const { movies } = AudreyMovies;
//   return (
//     movies.filter((movie) => movie.id === movieOnShow)
//     .map((movie) => (
//       <div key={movie.id}>
//       <MovieDetails 
//         movie={movie}
//         // setFavorites={setFavorites}
//         // favorites={favorites}
//       />
//       </div>
//     ))
//   );
// }

// export default Details;
