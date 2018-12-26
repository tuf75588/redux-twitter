import { saveLikeToggle } from '../utils/api';
import { saveTweet } from '../utils/api';
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_TWEET = 'TOGGLE_TWEET';
//! new action creator for saving a tweet.
export const ADD_TWEET = 'ADD_TWEET';
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
  return (dispatch) => {
    return saveLikeToggle(info).catch((e) => {
      console.warn(`error in handleToggleTweet ${e}`);
      dispatch(toggleTweet(info));
      alert(`there was an error in liking the tweet, please try again!`);
    });
  };
}
function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet
  };
}
export function handleAddTweet(tweet) {
  return (dispatch) => {
    return saveTweet(tweet)
      .then((formattedTweet) => {
        dispatch(addTweet(formattedTweet));
      })
      .catch((e) => {
        console.warn('error in saving tweet!', e);
      });
  };
}
