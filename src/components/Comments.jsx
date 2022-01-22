// Import React and CSS
import React, {useState, useEffect} from 'react';

const Comments = ({source, storedComments, saveComment}) => {
  const [textAreaInfo, setTextAreaInfo] = useState('');
  const [typedInfo, setTypedInfo] = useState({ name:'', email:'' });
  const [buttonState, setButtonState] = useState(true);

  const handleTextArea = ({ target : {value} }) => {
    setTextAreaInfo(value)
    if (value.length >= 1) {
      setButtonState(false)
    } else {
      setButtonState(true)
    }
  }

  const handleTypedInfo = ({target}) => {
    const {name, value} = target;
    setTypedInfo({
        ...typedInfo,
        [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    saveComment([
      ...storedComments,
      { id: source.id, name: typedInfo.name, email: typedInfo.email, comment: textAreaInfo }
    ])
  }

  const handleCancel = (event) => {
    event.preventDefault();
    setTextAreaInfo('')
  }

  return (
    <form>
      <label htmlFor="login"> Your Name:
        <input type="text" id="name" name="name" onChange={handleTypedInfo} value={typedInfo.name} />
      </label>

      <label htmlFor="password"> Email:
        <input type="text" id="email" name="email" onChange={handleTypedInfo} value={typedInfo.email} />
      </label>
      
      <textarea id="comment" name="comment" rows="5" cols="33" placeholder='Add a comment...' onChange={handleTextArea} value={textAreaInfo}></textarea>
      <button type='submit' disabled={buttonState} onClick={handleSubmit}> Post</button>
      <button type='submit' onClick={handleCancel}> Cancel</button>
    </form>
  );
}

export default Comments;
