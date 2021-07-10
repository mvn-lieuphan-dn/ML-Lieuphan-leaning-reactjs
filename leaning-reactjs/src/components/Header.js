import logo from './../logo.svg';
export default function Header() {
  return (
    <header className="header-page">
      <div className="container header-wrapper flex">
        <div className="header-left flex">
          <img src={logo} className="header-logo" alt="logo"/>
          <ul className="menu-list flex">
            <li className="menu-item flex justify-content-center align-items-center"><a className="menu-item-link" href="#">List</a></li>
            <li className="menu-item flex justify-content-center align-items-center"><a className="menu-item-link active" href="#">Group</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}
