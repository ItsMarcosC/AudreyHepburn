import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { saveLogin } from '../redux/actions';
import { useHistory } from "react-router";

const Login = ({saveInfo, displayName}) => {
  const history = useHistory();
  const [typedInfo, setTypedInfo] = useState({ name:'', email:''});
  const [invalidInfo, toggleInvalidInfo] = useState(true);

  useEffect( () => {
    handleValidation();
  }, [typedInfo] )
  
  const handleValidation = () => {
    const validRegex = /\S+@\S+\.\S+/;
    const minimumNameLength = 4;

    if (validRegex.test(typedInfo.email) && typedInfo.name.length >= minimumNameLength) {
      toggleInvalidInfo(false)
    } else {
      toggleInvalidInfo(true)
    }
  }

  const onChangeHandle = ({target}) => {
    const {name, value} = target;
    setTypedInfo({
        ...typedInfo,
        [name]: value
    });
  }
  
  const submitButtonHandler = () => {
    saveInfo(typedInfo.name, typedInfo.email, true)
    history.push('/')
  };

    return ( 
      <div>
        <form>
          <label htmlFor="name"> Name:
            <input type="text" id="name" name="name" onChange={onChangeHandle} value={typedInfo.name} placeholder={`Your name`} />
          </label>

          <label htmlFor="email"> Email:
            <input type="text" id="email" name="email" onChange={onChangeHandle} value={typedInfo.email} placeholder={`Your email`} />
          </label>
          
          <button 
            type="button" 
            disabled = {invalidInfo}
            onClick={submitButtonHandler} 
          >
            Sign in  
          </button>
        </form>
      </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
  saveInfo:(name, email, isLogged) => dispatch(saveLogin(name, email, isLogged))
});

export default connect(null, mapDispatchToProps)(Login);
