// Import React and CSS
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

// Import Components and Pages
import Home from './pages/Home'
import Movie from './pages/Movie';
import NotFound from './pages/404';


function App() {
  return (
    <>
      <Switch>
        <Route path="/movie" component={Movie}/>
        <Route exact path="/" component={Home}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </>
  );
}

export default App;
