import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from '../actions/tweets';

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets
      };
    case TOGGLE_TWEET:
      const { authedUser, id, hasLiked } = action;
      const tweet = state[id];
      return {
        ...state,
        [action.id]: {
          ...tweet,
          likes: hasLiked ? tweet.likes.filter((x) => x !== authedUser) : tweet.likes.concat([authedUser])
        }
      };
    case ADD_TWEET:
      console.log(state);
      return {
        ...state,
        [action.tweet.id]: {
          ...action.tweet
        }
      };
    default:
      return state;
  }
}
