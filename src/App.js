// Import React and CSS
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import './style/App.css';

// Import Components and Pages
import Home from './pages/Home'
import Movie from './pages/Movie';
import NotFound from './pages/404';
import Nav from './components/Nav'
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <Nav />
      <Switch>
        <Route path="/movie" component={Movie}/>
        <Route exact path="/" component={Home}/>
        <Route path="*" component={NotFound}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
