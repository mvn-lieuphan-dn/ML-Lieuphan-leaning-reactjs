import React from 'react';
import { useHistory } from "react-router-dom";
function Login() {
  const history = useHistory();
  const adminUser = {
    email: 'lieu.phan@monstar-lab.com',
    password: '1111'
  }
  function logout () {
    localStorage.removeItem('isLogined')
    history.push('/auth/login')
  }
  function goHome () {
    history.push('/')
  }
  return (
    <div className="container page-account">
      <h2>{ adminUser.email }</h2>
      <h2>{ adminUser.password }</h2>
      <button className="mr-10" onClick={() => goHome()}>Home</button>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
export default Login;
 