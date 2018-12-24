import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TiArrowBackOutline } from 'react-icons/ti';
import { TiHeartOutline } from 'react-icons/ti';
import { TiHeartFullOutline } from 'react-icons/ti';
import { handleToggleTweet } from '../actions/tweets';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/helpers';
class Tweet extends Component {
  state = {
    hasLiked: false
  };
  handleClick = (params) => {
    const { id, tweet, authedUser } = this.props;
    console.log(tweet);
    this.setState((state, props) => {
      return {
        hasLiked: !state.hasLiked
      };
    });

    this.props.dispatch(handleToggleTweet({ authedUser, hasLiked: this.state.hasLiked, id }));
  };
  render() {
    const { id, tweet, avatar, replyTweet } = this.props;
    const { author } = tweet;
    const likes = tweet.likes.length;

    return (
      <li>
        <Link className='tweet' to='/'>
          <img src={avatar} alt='' className='avatar' />
          <div className='tweet-info'>
            <div>
              <span>{author}</span>
              <span />
              <div>{formatDate(tweet.timestamp)}</div>{' '}
              {replyTweet.length ? <button className='replying-to'>Replying to : {replyTweet}</button> : null}
              <p>{tweet.text}</p>
            </div>
            <div className='tweet-icons'>
              <TiArrowBackOutline className='tweet-icon' style={{ verticalAlign: 'middle' }} />
              <span>2</span>
              <button className='heart-button' onClick={() => this.handleClick('hello')}>
                <TiHeartOutline className='tweet-icon' style={{ verticalAlign: 'middle' }} height='1em' />
              </button>
              <span>{likes}</span>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

const mapStateToProps = ({ users, tweets, authedUser }, { id }) => {
  const tweet = tweets[id];
  const replying = tweets[id].replyingTo;
  const replyTweet = Object.keys(tweets)
    .filter((tweet) => tweets[tweet].id === replying)
    .map((tweet) => tweets[tweet].author);
  return {
    authedUser,
    tweet,
    avatar: users[tweet.author].avatarURL,
    replying,
    replyTweet
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps)(Tweet);
