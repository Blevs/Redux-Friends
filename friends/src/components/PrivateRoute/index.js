import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({component: Component, errorStatusCode, ...rest}) => {
  return (
    <Route {...rest} render={props => {
      if (localStorage.getItem("userToken") && errorStatusCode !== 403) {
        return <Component {...props} />;
      } else {
        return <Redirect to="/login" />;
      }
    }} />
  );
};

const mapStateToProps = ({error}) => ({errorStatusCode: error && error.response.status});

export default connect(mapStateToProps, {})(PrivateRoute);
