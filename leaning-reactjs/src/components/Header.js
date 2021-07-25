import logo from './../logo.svg';
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="header-page">
      <div className="container header-wrapper flex">
        <div className="header-left flex">
          <img src={logo} className="header-logo" alt="logo"/>
          <nav className="navbar">
            <ul className="menu-list flex">
              <li className="menu-item flex justify-content-center align-items-center"><NavLink to="/">Home</NavLink></li>
              <li className="menu-item flex justify-content-center align-items-center"><NavLink to="/products">Products</NavLink></li>
              <li className="menu-item flex justify-content-center align-items-center"><NavLink to="/account">Account</NavLink></li>
              <li className="menu-item flex justify-content-center align-items-center"><NavLink to="/auth/login">Login</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
