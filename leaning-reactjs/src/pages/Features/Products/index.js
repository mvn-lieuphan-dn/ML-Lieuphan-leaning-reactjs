import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { PRODUCTS } from '../../../core/utils/product';
export default function Product() {
  const [products, setProducts] = useState(PRODUCTS);
  const history = useHistory();
  function showDetailProduct(p) {
    history.push(`products/${p}`);
  }
  return (
    <main className="main-page">
      <div className="container bg-main">
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
      </div>
    </main>
  )
}
