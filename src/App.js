import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
class App extends Component {
  componentDidMount() {
    console.log(this.props);
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    return <div className='App'>REDUX APP</div>;
  }
}

export default connect()(App);
