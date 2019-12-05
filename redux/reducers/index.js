import {combineReducers} from 'redux';
import login from './auth/login';
import signup from './auth/signup';

export default combineReducers({
  login,
  signup,
});
