// Import React and CSS
import React from 'react';
import { connect } from 'react-redux';
import  { Redirect } from 'react-router-dom'

// Import Components and Pages
import AudreyMovies from '../data/data_movies';
import Movie from '../components/Movie';

const Movies = ({loginStatus, setFavorites, favorites, setMovie}) => {
  const { movies } = AudreyMovies;

  switch (loginStatus) {
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

const mapStateToProps = (state) => ({
  loginStatus: state.login.isLogged,
});

export default connect(mapStateToProps)(Movies);
