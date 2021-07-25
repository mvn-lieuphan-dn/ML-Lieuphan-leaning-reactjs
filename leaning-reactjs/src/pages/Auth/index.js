import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Login from './Login';

const Auth = () => {
  return (
    <BrowserRouter>
      <Route path="/auth/login">
        <Login />
      </Route>
    </BrowserRouter>
  )
}
export default Auth;