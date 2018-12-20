import { combineReducers } from 'redux';
import { setAuthedUser } from './authedUser';
import { receiveUsers } from './users';
import { receiveTweets } from './tweets';

export default combineReducers({
  receiveUsers,
  receiveTweets,
  setAuthedUser
});
