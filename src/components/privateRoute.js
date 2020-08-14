import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';

// Router Wrapper
const PrivateRoute = ({ component: Child, ...props }) => {
// some stuff goes here

}

export default withRouter(connect(mapStateToProps, null)(PrivateRoute));