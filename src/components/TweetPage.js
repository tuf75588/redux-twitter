import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';
import NewTweet from './NewTweet';

class TweetPage extends Component {
  render() {
    return (
      <div>
        <Tweet id={this.props.id} />
        <New id={this.props.id} />

        <h1 className='replies'>Replies</h1>
        {this.props.replies.map((id) => (
          <Tweet id={id} />
        ))}
      </div>
    );
  }
}
function mapStateToProps({ tweets, users, authedUser }, { match }) {
  const { id } = match.params;

  return {
    id,
    replies: !tweets[id] ? [] : tweets[id].replies.sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
  };
}
export default connect(mapStateToProps)(TweetPage);
