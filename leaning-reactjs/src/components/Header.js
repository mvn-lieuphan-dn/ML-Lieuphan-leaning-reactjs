import logo from './../logo.svg';
export default function Header() {
  return (
    <header className="header-page">
      <div className="container header-wrapper flex">
        <div className="header-left flex">
          <img src={logo} className="header-logo" alt="logo"/>
          <ul className="menu-list flex">
            <li className="menu-item"><a className="menu-item-link" href="#">Docs</a></li>
            <li className="menu-item"><a className="menu-item-link" href="#">Tutorial</a></li>
            <li className="menu-item"><a className="menu-item-link" href="#">Blog</a></li>
            <li className="menu-item"><a className="menu-item-link" href="#">Community</a></li>
          </ul>
        </div>
        <ul className="header-right flex">
          <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#"><i className="fa fa-google"></i></a></li>
        </ul>
      </div>
    </header>
  )
}
