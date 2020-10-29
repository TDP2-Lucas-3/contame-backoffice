import {combineReducers} from 'redux';
import {auth} from './auth';

function reducer() {
  return combineReducers({auth});
}

export default reducer();
