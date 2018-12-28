import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TiArrowBackOutline } from 'react-icons/ti';
import { TiHeartOutline } from 'react-icons/ti';
import { TiHeartFullOutline } from 'react-icons/ti';
import { handleToggleTweet } from '../actions/tweets';
import { Link, withRouter } from 'react-router-dom';
import { formatDate, formatTweet } from '../utils/helpers';
class Tweet extends Component {
  handleClick = (e) => {
    const { dispatch, tweet, authedUser } = this.props;
    e.preventDefault();
    dispatch(
      handleToggleTweet({
        id: tweet.id,
        hasLiked: tweet.hasLiked,
        authedUser
      })
    );
  };
  toParent = (e, id) => {
    e.preventDefault();
    this.props.history.push(`/tweet/${id}`);
  };
  render() {
    const { tweet, id } = this.props;

    return (
      <Link className='tweet' to={`/tweet/${id}`}>
        <img src={tweet.avatar} alt='' className='avatar' />
        <div className='tweet-info'>
          <div>
            <span>{tweet.name}</span>
            <span />
            <div>{formatDate(tweet.timestamp)}</div>
            {/* Replying to button here */}
            <p>{tweet.text}</p>
          </div>
          <div className='tweet-icons'>
            <TiArrowBackOutline
              className='tweet-icon'
              style={{ verticalAlign: 'middle' }}
              onClick={(e) => this.toParent(e, id)}
            />
            <span />
            <button className='heart-button' onClick={this.handleClick}>
              {!tweet.hasLiked ? (
                <TiHeartOutline className='tweet-icon' style={{ verticalAlign: 'middle' }} height='1em' />
              ) : (
                <TiHeartFullOutline className='tweet-icon' style={{ verticalAlign: 'middle' }} height='1em' />
              )}
            </button>
            <span>{tweet.likes}</span>
          </div>
        </div>
      </Link>
    );
  }
}

const mapStateToProps = ({ users, tweets, authedUser }, { id }) => {
  const tweet = tweets[id];

  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

  return {
    authedUser,
    tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null,
    id
  };
};

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps)(Tweet));
