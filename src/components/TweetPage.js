import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';
import New from './New';

class TweetPage extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Tweet id={this.props.id} />
        <New />
      </div>
    );
  }
}
const mapStateToProps = (state, { match }) => ({
  id: match.params.id
});

export default connect(mapStateToProps)(TweetPage);
