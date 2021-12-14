import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/movie">
          <li>Movie</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;