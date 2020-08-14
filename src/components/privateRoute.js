/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// Router Wrapper
const PrivateRoute = ({ component: Child, ...props }) => {
// some stuff goes here
  return (
    <Route
      {...props}
      render={(routeProps) => (props.authenticated ? (
        <Child {...routeProps} />
      ) : (
        <Redirect to="/signin" />
      ))}
    />
  );
};

function mapStateToProps(reduxState) {
  // console.log('mapping to props');
  return {
    authenticated: reduxState.auth.authenticated,
  };
}

export default connect(mapStateToProps, null)(PrivateRoute);
