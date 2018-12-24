import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import New from './New';
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
          {this.props.loading === true ? null : (
            <div className='container'>
              {/* <Dashboard /> */}
              <New />
            </div>
          )}
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
