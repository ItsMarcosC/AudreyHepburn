import { SAVE_USER_INFO } from "../actions";

const INITIAL_STATE = {
  isLogged: false,
  name: '',
  email: '',
}

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_USER_INFO:
      return {
        ...state,
        isLogged: action.isLogged,
        name: action.name,
        email: action.email,
      }
    default:
      return state;
  }
}

export default loginReducer;