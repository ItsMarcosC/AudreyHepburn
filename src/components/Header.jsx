import React from "react";
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';

function Header({displayName, gravatarEmail}) {

  const getProfileImage = () => {
    const hash = md5(gravatarEmail).toString();
    return `https://www.gravatar.com/avatar/${hash}`;
  }

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
          <img src={getProfileImage()} alt='' />
        </div>
      );
  }
}

const mapStateToProps = (state) => ({
  displayName: state.login.name,
  gravatarEmail: state.login.email,
});

export default connect(mapStateToProps)(Header);
