import logo from '../logo.svg';
import { useState, useEffect } from 'react';
export default function Main() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`).then(e => e.json()).then(e => {
      setUsers(e.data)
    })
  }, [page])
  function changePage (page) {
    setPage(page)
  }
  function handlePrevPage () {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  function handleNextPage () {
    if (page < 3) {
      setPage(page + 1);
    }
  }
  return (
    <main className="main-page">
      <div className="container bg-main">
        <ul className="users row">
          {
            users.map((user) => 
              <li key={user.id} className="user col-4">
                <div className="wrapper">
                  <img src={user.avatar}></img>
                  <h3 className="name">{user.first_name} {user.last_name}</h3>
                  <p className="mail">{user.email}</p>
                </div>
              </li>
            )
          }
        </ul>
        <div className="flex-center actions">
          <button className="btn-page" onClick={() => handlePrevPage()}>{`${"<<"}`}</button>
          <button className={(page === 1) ? 'btn-page active' : 'btn-page'} onClick={() => changePage(1)}>1</button>
          <button className={(page === 2) ? 'btn-page active' : 'btn-page'} onClick={() => changePage(2)}>2</button>
          <button className={(page === 3) ? 'btn-page active' : 'btn-page'} onClick={() => changePage(3)}>3</button>
          <button className="btn-page" onClick={() => handleNextPage()}>{`${">>"}`}</button>
        </div>
      </div>
    </main>
  )
}
