import { SET_MOVIE_DISPLAY } from "../actions";

const INITIAL_STATE = {
  movie: '',
}

const onDisplayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MOVIE_DISPLAY:
      return {
        ...state,
        movie: action.movie,
      }
    default:
      return state;
  }
}

export default onDisplayReducer;