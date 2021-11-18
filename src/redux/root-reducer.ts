import { combineReducers } from 'redux';
import users from './users/reducer';
import products from './products/reduser';
import auth from "./auth/reducer";


export default combineReducers({
  users,
  products,
  auth
});
