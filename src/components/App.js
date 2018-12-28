import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import New from './New';
import TweetPage from './TweetPage';
import Nav from './Nav';
class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true ? null : (
              <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/tweet/:id' component={TweetPage} />
                <Route path='/new' component={New} />
              </div>
            )}
          </div>
        </>
      </Router>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}
const mapDispatchToProps = {};

export default connect(mapStateToProps)(App);
