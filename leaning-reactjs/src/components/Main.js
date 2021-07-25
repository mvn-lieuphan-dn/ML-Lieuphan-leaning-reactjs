import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { PRODUCTS } from '../core/utils/product'
export default function Main() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`).then(e => e.json()).then(e => {
      setUsers(e.data)
    })
  }, [page])
  const [products, setProducts] = useState(PRODUCTS);
  const history = useHistory();
  function showDetailProduct(p) {
    history.push(`products/${p}`);
  }
  return (
    <div className="container bg-main home-page">
      <div className="banner"></div>
      <section className="section-products">
        <h2 className="pt-20">PRODUCTS</h2>
        <ul className="users row">
        {
          products.map((p) => 
            <li key={p.id} className="user col-3">
              <div className="wrapper" onClick={() => showDetailProduct(p.id)}>
                <img src={p.img}></img>
                <h3 className="name">{p.name}</h3>
                <p className="mail">{p.price}</p>
              </div>
            </li>
          )
        }
      </ul>
      </section>
      <section className="section-user">
        <h2 className="pt-20">USERS</h2>
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
      </section>
    </div>
  )
}
