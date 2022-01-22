import React from "react";
import { connect } from 'react-redux';

function Header({displayName}) {
  switch (displayName) {
    case "":
      return (
      <div>
      <h2>Welcome to the Audrey Hepburn Project</h2>
      </div>
      );
    default:
      return (
        <div>
          <h2>{`Hello ${displayName} `}</h2>
        </div>
      );
  }
  
}

const mapStateToProps = (state) => ({
  displayName: state.login.name,
});

export default connect(mapStateToProps)(Header);
