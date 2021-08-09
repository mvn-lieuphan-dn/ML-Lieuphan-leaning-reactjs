import logo from './../logo.svg';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { FaUser, FaCartPlus } from 'react-icons/fa';

export default function Header() {
  const checkLogin = useSelector((state) => state.isLogined.value);
  console.log(checkLogin)
  return (
    <header className="header-page">
      <div className="container header-wrapper flex align-items-center flex-between">
        <div className="header-left flex">
          <img src={logo} className="header-logo" alt="logo"/>
          <nav className="navbar">
            <ul className="menu-list flex">
              <li className="menu-item flex justify-content-center align-items-center"><NavLink to="/">Home</NavLink></li>
              <li className="menu-item flex justify-content-center align-items-center"><NavLink to="/products">Products</NavLink></li>
              <li className="menu-item flex justify-content-center align-items-center"><NavLink to="/">News</NavLink></li>
              <li className="menu-item flex justify-content-center align-items-center"><NavLink to="/">Shop</NavLink></li>
              <li className="menu-item flex justify-content-center align-items-center"><NavLink to="/">Contact</NavLink></li>
              <li className="menu-item flex justify-content-center align-items-center"><NavLink to="/">...</NavLink></li>
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <ul className="menu-list flex">
            <li className="menu-item flex justify-content-center align-items-center p-0"><NavLink to="/auth/login"><FaCartPlus /></NavLink></li>
            {checkLogin &&
              <li className="menu-item flex justify-content-center align-items-center">
                <NavLink to="/account" className="menu-item"><FaUser/><span className="pl-2">Hi!!!</span></NavLink>
              </li>
            }
          </ul>
        </div>
      </div>
    </header>
  )
}
