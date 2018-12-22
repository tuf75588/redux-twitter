import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import ButtonAppBar from './ButtonAppBar';
import Dashboard from './Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';
class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    return (
      <>
        <Router>
          <div className='container'>
            <ButtonAppBar />
            <Dashboard />
          </div>
        </Router>
      </>
    );
  }
}

export default connect()(App);
