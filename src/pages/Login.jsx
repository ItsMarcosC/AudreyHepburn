import React from "react";
import Form from '../components/Form'

const Login = ({profileInfo, setProfileInfo, isLogged, toggleLogged}) => {
  switch(isLogged) {
    case true:
      return  <h2>ESTOU LOGADA</h2>
    default:
      return <Form 
        profileInfo={profileInfo}
        setProfileInfo={setProfileInfo}
      />
  }
}

export default Login;