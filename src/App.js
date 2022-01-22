// Import React and CSS
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import './style/App.css';

// Import Components and Pages
import Home from './pages/Home'
import Movies from './pages/Movies';
import Books from './pages/Books';
import Readlist from './pages/Readlist';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/404';
import Nav from './components/Nav'
import Header from './components/Header';
import Footer from './components/Footer';
import Details from './pages/Details';

function App() {
  const [isLogged, toggleLogged] = useState(false);
  const [selectedFilter, setFilter] = useState('All');
  const [favorites, setFavorites] = useState([]);
  const [storedComments, saveComment] = useState([]);
  const [movieD, setMovie] = useState('');
  const [mainLogin] = useState({
    login: 'Audrey',
    password: 'Hepburn',
  });
  
  return (
    <>
      <Header />
      <Nav />
      <Switch>
      <Route path="/details" component={ () =>
          <Details 
            movie={movieD}
            favorites={favorites}
            setFavorites={setFavorites}
          />}
        />
        <Route path="/login" component={ () => 
          <Login
            mainLogin={mainLogin}
            isLogged={isLogged}
            toggleLogged={toggleLogged}
          />}
        />
        <Route path="/movies" component={ () =>
          <Movies
            isLogged={isLogged}
            favorites={favorites}
            setFavorites={setFavorites}
            storedComments={storedComments}
            saveComment={saveComment}
            setMovie={setMovie}
          />}
        />
        <Route path="/books" component={ () =>
          <Books
            isLogged={isLogged}
            favorites={favorites}
            setFavorites={setFavorites}
          />}
        />
        <Route path="/readlist" component={ () =>
          <Readlist
            isLogged={isLogged}
            favorites={favorites}
            setFavorites={setFavorites}
          />}
        />
        <Route path="/favorites" component={ () =>
          <Favorites
            isLogged={isLogged}
            favorites={favorites}
            setFavorites={setFavorites}
            selectedFilter={selectedFilter}
            setFilter={setFilter}
          />}
        />
        <Route exact path="/" component={ () => 
          <Home
            isLogged={isLogged}
          />}
        />
        <Route path="*" component={NotFound}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
