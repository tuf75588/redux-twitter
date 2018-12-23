import { combineReducers } from 'redux';
import authedUser from './authedUser';
import users from './users';
import tweets from './tweets';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
  users,
  tweets,
  authedUser,
  loadingBar: loadingBarReducer
});
