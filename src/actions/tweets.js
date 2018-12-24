import { saveLikeToggle } from '../utils/api';
import { showLoading } from 'react-redux-loading';

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_TWEET = 'TOGGLE_TWEET';
export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  };
}
function toggleTweet({ authedUser, hasLiked, id }) {
  return {
    type: TOGGLE_TWEET,
    authedUser,
    hasLiked,
    id
  };
}
export function handleToggleTweet(info) {
  return toggleTweet(info);
}
