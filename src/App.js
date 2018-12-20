import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import AppBar from '@material-ui/core/AppBar';
class App extends Component {
  componentDidMount() {
    console.log(this.props);
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    return (
      <div className='App'>
        <AppBar>Hi</AppBar>
      </div>
    );
  }
}

export default connect()(App);
