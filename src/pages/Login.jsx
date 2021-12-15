import React, { useState } from 'react';
import  { Redirect } from 'react-router-dom'
import InvalidLogin from '../components/InvalidLogin';

const Login = ({mainLogin, isLogged, toggleLogged}) => {
  const [typedInfo, setTypedInfo] = useState({ login:'', password:'' });
  const [validInfo, toggleValidInfo] = useState(true);
  
  const onChangeHandle = ({target}) => {
    const {name, value} = target;
    setTypedInfo({
        ...typedInfo,
        [name]: value
    })
  }
  
  const submitButtonHandler = (e) => {
    e.preventDefault();
    if (typedInfo.login === mainLogin.login && typedInfo.password === mainLogin.password) {
      toggleLogged(true);
    } else {
      toggleValidInfo(false);
    }
    setTypedInfo({
      login: '',
      password: '',
    });
  };

  switch(isLogged) {
    case true:
      return  <Redirect to="/"/>
    default:
      return ( 
        <div>
          <form>
            <label htmlFor="login"> Login:
              <input type="text" id="login" name="login" onChange={onChangeHandle} value={typedInfo.login} placeholder={`(Use 'Audrey' to enter)`} />
            </label>

            <label htmlFor="password"> Password:
              <input type="text" id="password" name="password" onChange={onChangeHandle} value={typedInfo.password} placeholder={`(Use 'Hepburn' to enter)`} />
            </label>
            
            <button type="submit" onClick={submitButtonHandler} >
              Sign in  
            </button>
          </form>
          { validInfo ? '' : <InvalidLogin /> }
        </div>
      );
  }
}

export default Login;
