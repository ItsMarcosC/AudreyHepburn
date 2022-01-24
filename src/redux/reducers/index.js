import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import onDisplayReducer from './onDisplayReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  display: onDisplayReducer,
});

export default rootReducer;