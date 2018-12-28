import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddTweet } from '../actions/tweets';
class New extends Component {
  state = {
    tweet: ''
  };
  handleInputChange = ({ target: { value } }) => {
    this.setState((state, props) => {
      return {
        tweet: value
      };
    });
  };
  isDisabled = () => {
    const { tweet } = this.state;
    return tweet === '';
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { tweet } = this.state;
    const { authedUser } = this.props;

    this.props.dispatch(handleAddTweet({ text: tweet, id: this.props.id }));
    // this.props.history.push('/');
    //react router redirect
  };
  render() {
    console.log(this.props.tweets);
    return (
      <div>
        <h1 className='center'>Compose New Tweet</h1>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea name='' id='' maxLength='200' className='textarea' onChange={this.handleInputChange} />
          <button
            className='btn'
            disabled={this.isDisabled()}
            style={{ cursor: this.isDisabled() ? 'not-allowed' : 'pointer' }}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = ({ authedUser, tweets }, props) => ({
  tweets,
  authedUser
});
export default connect(mapStateToProps)(New);
