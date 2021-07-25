import React from 'react';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({children, ...rest}) => {
  const auth = localStorage.getItem('isLogined')
  return (
    <Route
      {...rest} render={() => auth ? children : <Redirect to="/auth/login" />}
    />
  )
}
export default PrivateRoute;