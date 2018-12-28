import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';
//!connect our app to redux
class Dashboard extends Component {
  render() {
    const { id } = this.props;

    return (
      <>
        <div className='dashboard'>
          <h2 className='timeline'>Your Timeline</h2>
          <div>
            <ul className='dashboard-list'>
              {id.map((id) => (
                <li key={id}>
                  <Tweet id={id} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
function mapStateToProps({ tweets, authedUser, users }) {
  //! we need each tweet id?
  const id = Object.keys(tweets).sort((a, b) => tweets[b].timestamp - tweets[a].timestamp);
  return {
    id
  };
}
export default connect(mapStateToProps)(Dashboard);
