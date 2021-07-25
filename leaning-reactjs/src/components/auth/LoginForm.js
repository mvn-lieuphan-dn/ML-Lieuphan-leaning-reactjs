import React, {useState} from 'react';
function LoginForm(props) {
  const [details, setDetails] = useState({email: '', password: ''});
  function submitHandler(e) {
    e.preventDefault();
    props.Login(details);
  }
  return (
    <div className="page-login">
      <div className="container">
        <h2 className="text-center mg-t-10 mg-b-5">LOGIN</h2>
        {
          props.userErr && 
        <div className="msgErr">{props.userErr}</div>
        }
        <form onSubmit={submitHandler}>
          <div className="form-group mg-b-6">
            <label htmlFor="email" className="mg-b-3">Email:</label>
            <input type="text" className="form-control" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
          </div>
          <div className="form-group mg-b-6">
            <label htmlFor="password" className="mg-b-3">Password:</label>
            <input type="password" className="form-control" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
          </div>
          <button type="submit" className="btn btn-primary mg-b-6">Login</button>
        </form>
      </div>
    </div>
  );
}
export default LoginForm;