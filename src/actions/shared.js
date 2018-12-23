import { setAuthedUser } from './authedUsers';
import { receiveUsers } from './users';
import { receiveTweets } from './tweets';
import { getInitialData } from '../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading';
const AUTHED_ID = 'tylermcginnis';
//! defining our async action creator
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
