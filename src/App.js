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
import Mdetails from './pages/Mdetails';
import FavoritesProvider from './context/FavoritesProvider';

function App() {
  const [selectedFilter, setFilter] = useState('All');
  const [storedComments, saveComment] = useState([]);

  return (
    <>
      <FavoritesProvider>
        <Header />
        <Nav />
        <Switch>
        <Route path="/MovieDetails" component={ () =>
            <Mdetails/>}
          />
          <Route path="/login" component={ () => 
            <Login
            />}
          />
          <Route path="/movies" component={ () =>
            <Movies
              storedComments={storedComments}
              saveComment={saveComment}
            />}
          />
          <Route path="/books" component={ () =>
            <Books/>}
          />
          <Route path="/readlist" component={ () =>
            <Readlist/>}
          />
          <Route path="/favorites" component={ () =>
            <Favorites
              selectedFilter={selectedFilter}
              setFilter={setFilter}
            />}
          />
          <Route exact path="/" component={ () => 
            <Home/>}
          />
          <Route path="*" component={NotFound}/>
        </Switch>
        <Footer />
      </FavoritesProvider>
    </>
  );
}

export default App;
