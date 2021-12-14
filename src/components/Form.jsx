import React, { useState } from 'react';

const Form = ({profileInfo, setProfileInfo}) => {
  const [info, setInfo] = useState({ name:'', password:'' });
  
  const onChangeHandle = ({target}) => {
    const {name, value} = target;
    setInfo({
        ...info,
        [name]: value
    })
  }
  
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setProfileInfo([
      ...profileInfo, 
      {name: info.name, password: info.password}
    ]);
    setInfo("");
  };
 return (
    <form>
      <input type="text" className="todo-input" onChange={onChangeHandle} value={info.name} name="name"/>
      <input type="text" className="todo-input" onChange={onChangeHandle} value={info.password} name="password" />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        Click!  
      </button>
    </form>
  );
}

export default Form;