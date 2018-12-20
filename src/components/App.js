import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import ButtonAppBar from './ButtonAppBar';

class App extends Component {
  componentDidMount() {
    console.log(this.props);
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    return (
      <div className='App'>
        <ButtonAppBar />
        <h2 className='timeline'>Your Timeline</h2>
      </div>
    );
  }
}

export default connect()(App);
