import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signoutUser } from '../actions';

class NavBar extends Component {
  signOutCall = () => {
    console.log('calling sign out');
    this.props.signoutUser(this.props.history);
  }

  render() {
    if (this.props.authenticated) {
      return (
        <nav>
          <ul className="navBar">
            <NavLink id="head" exact to="/">CAROLINE BLOG</NavLink>
            <NavLink to="/posts/new">NEW POST</NavLink>
            <NavLink onClick={this.signOutCall} to="/signout">SIGN OUT</NavLink>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav>
          <ul className="navBar">
            <NavLink id="head" exact to="/">CAROLINE BLOG</NavLink>
            <NavLink to="/posts/new">NEW POST</NavLink>
            <NavLink to="/signin">SIGN IN</NavLink>
            <NavLink to="/signup">SIGN UP</NavLink>
          </ul>
        </nav>
      );
    }
  }
}

function mapStateToProps(reduxState) {
  // console.log('mapping to props');
  return {
    authenticated: reduxState.auth.authenticated,
  };
}

export default connect(mapStateToProps, { signoutUser })(NavBar);
