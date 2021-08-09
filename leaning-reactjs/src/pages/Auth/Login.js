import React, { useState } from 'react';
import LoginForm  from '../../components/auth/LoginForm';
import { useHistory } from "react-router-dom";
function Login() {
  const history = useHistory();
  const adminUser = {
    email: 'lieu.phan@monstar-lab.com',
    password: '1111'
  }
  const [user, setUser] = useState({name: '', email: ''});
  const [userErr, setUserErr] = useState('');
  function Login(details) {
    console.log(details);
    if(details.email == adminUser.email && details.password == adminUser.password) {
      setUser({
        name: details.name,
        email: details.email
      });
    }
    else {
      setUserErr('Detail do not match!')
    }
  }

  return (
    <div>
      <LoginForm Login={Login} userErr={userErr} />
    </div>
  );
}
export default Login;
