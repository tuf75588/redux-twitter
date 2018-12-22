import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TiArrowBackOutline } from 'react-icons/ti';
import { TiHeartOutline } from 'react-icons/ti';
import { TiHeartFullOutline } from 'react-icons/ti';

import { Link } from 'react-router-dom';
import { formatDate } from '../utils/helpers';
class Tweet extends Component {
  render() {
    const { id, tweet, avatar, replyTweet } = this.props;
    const { author } = tweet;
    const likes = tweet.likes.length;
    console.log('replyTweet :', replyTweet);
    return (
      <li>
        <Link to='/' className='tweet'>
          <img src={avatar} alt='' className='avatar' />
          <div className='tweet-info'>
            <div>
              <span style={{ fontWeight: 700, marginRight: '5px' }}>{author}</span>
              <span />
              <div>{formatDate(tweet.timestamp)}</div>
              {replyTweet.length ? <button className='replying-to'>Replying to : {replyTweet}</button> : null}
              <p>{tweet.text}</p>
            </div>
            <div className='tweet-icons'>
              <div className='tweet-icon'>
                <TiArrowBackOutline />
              </div>
              <button className='heart-icon'>
                <TiHeartOutline className='tweet-icon' />
              </button>
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
    tweet,
    avatar: users[tweet.author].avatarURL,
    replying,
    replyTweet
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps)(Tweet);
