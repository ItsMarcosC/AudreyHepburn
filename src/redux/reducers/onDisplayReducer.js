import { SET_ON_DISPLAY} from "../actions";

const INITIAL_STATE = {
  onDisplay: '',
}

const onDisplayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ON_DISPLAY:
      return {
        ...state,
        onDisplay: action.onDisplay,
      }
    default:
      return state;
  }
}

export default onDisplayReducer;