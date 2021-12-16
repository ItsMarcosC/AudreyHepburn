// Import React and CSS
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import './style/App.css';

// Import Components and Pages
import Home from './pages/Home'
import Movies from './pages/Movies';
import Books from './pages/Books';
import Login from './pages/Login';
import NotFound from './pages/404';
import Nav from './components/Nav'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [isLogged, toggleLogged] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [mainLogin] = useState({
    login: 'Audrey',
    password: 'Hepburn',
  });
  
  return (
    <>
      <Header />
      <Nav />
      <Switch>
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
          />}
        />
        <Route path="/books" component={ () =>
          <Books
            isLogged={isLogged}
            favorites={favorites}
            setFavorites={setFavorites}
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
