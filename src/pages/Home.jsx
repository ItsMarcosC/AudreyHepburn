import React from 'react';
import  { Redirect } from 'react-router-dom';

const Home = ({isLogged}) => {
  return (
    <div className="App">
      { isLogged ? <h1>Home Page</h1> : <Redirect to="/login"/>}
    </div>
  );
}

export default Home;
