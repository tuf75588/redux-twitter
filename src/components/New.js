import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  };
  render() {
    const { name } = this.props;
    console.log(name);

    return (
      <div>
        <h1 className='center'>Compose New Tweet</h1>
        <form className='new-tweet'>
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
const mapStateToProps = (state, props) => ({
  name: 'andrew'
});
export default connect(mapStateToProps)(New);
