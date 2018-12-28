import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';
import New from './New';
import { formatTweet } from '../utils/helpers';

class TweetPage extends Component {
  render() {
    return (
      <div>
        <Tweet id={this.props.id} />
        <New id={this.props.id} />

        <h1 className='replies'>Replies</h1>
        {this.props.tweet.replies.map((id) => (
          <Tweet id={id} />
        ))}
      </div>
    );
  }
}
function mapStateToProps({ tweets, users, authedUser }, { match }) {
  const tweet = tweets[match.params.id];
  const parent = tweet ? tweets[tweet.replyingTo] : null;
  return {
    tweet,
    parent,
    id: match.params.id
  };
}
export default connect(mapStateToProps)(TweetPage);
