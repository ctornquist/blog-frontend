import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../actions';

class signIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      username: '',
    };
  }

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  changeUsername = (event) => {
    this.setState({ username: event.target.value });
  }

  changePW = (event) => {
    this.setState({ password: event.target.value });
  }

  signInCall = () => {
    this.props.signinUser(this.state, this.props.history);
  }

  render() {
    return (
      <div className="newPost">
        <textarea id="email" onChange={this.changeEmail} value={this.state.email} placeholder="Email.." />
        <textarea id="user" onChange={this.changeUsername} value={this.state.username} placeholder="Username.." />
        <textarea id="pw" onChange={this.changePW} value={this.state.password} placeholder="Password.." />
        <button className="btn btn-primary" onClick={this.signInCall} type="submit">SIGN IN</button>
      </div>
    );
  }
}

export default connect(null, { signinUser })(signIn);