// Import React and CSS
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

// Import Components and Pages
import Home from './pages/Home'
import Movie from './pages/Movie';


function App() {
  return (
    <>
      <Switch>
        <Route path="/movie" component={Movie}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </>
  );
}

export default App;
