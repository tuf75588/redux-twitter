import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//!connect our app to redux
class Dashboard extends Component {
  render() {
    const { tweetId } = this.props;

    return (
      <>
        <div className='dashboard'>
          <h2 className='timeline'>Your Timeline</h2>
          <div>
            <ul className='dashboard-list'>
              {tweetId.map((tweet) => {
                return (
                  <li>
                    <Link to='#' className='tweet'>
                      {tweet.id}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
function mapStateToProps({ tweets, authedUser, users }) {
  //! we need each tweet id?
  const tweetId = Object.keys(tweets)
    .map((tweet) => tweets[tweet])
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    tweetId
  };
}
export default connect(mapStateToProps)(Dashboard);
