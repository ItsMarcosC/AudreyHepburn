import React from 'react';
import { connect } from 'react-redux';
import AudreyMovies from '../data/data_movies';
import MovieDetails from '../components/MovieDetails';

const Mdetails = ({ onDisplay }) => {
  const { movies } = AudreyMovies;
  return (
    movies.filter((movie) => movie.id === onDisplay)
    .map((movie) => (
      <div key={movie.id}>
        <MovieDetails 
          movie={movie}
        />
      </div>
    ))
  );
}

const mapStateToProps = (state) => ({
  onDisplay: state.display.onDisplay,
});

export default connect(mapStateToProps)(Mdetails);
