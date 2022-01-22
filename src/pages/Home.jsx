import React from 'react';
import { connect } from 'react-redux';
import  { Redirect } from 'react-router-dom';

const Home = ({loginStatus}) => {
  return (
    <div className="App">
      { loginStatus ? <h1>Home Page</h1> : <Redirect to="/login"/>}
    </div>
  );
}

const mapStateToProps = (state) => ({
  loginStatus: state.login.isLogged,
});

export default connect(mapStateToProps)(Home);
