import React from 'react';
import { useState, useEffect } from 'react';
import { PRODUCTS } from '../../core/utils/product';
import Box from '../../components/commons/box';

function Account() {
  const [products, setProductFav] = useState([])
  useEffect(() => {
    const proFav = []
    PRODUCTS.map(p => {
      if(p.favorite) {
        proFav.push(p)
      }
      return 0
    })
    setProductFav(proFav)
  }, [])


  return (
    <div className="container page-account">
      <h2 className="text-center pt-4">LIST FAVORITED</h2>
      { products.length ?
        <ul className="users row">
          {
            products.map((p) => 
              <li key={p.id} className="box col-3">
                <Box product={p} />
              </li>
            )
          }
        </ul>
      : <p className="text-center fs-20">Your favorite product list is currently empty</p>
      }
    </div>
  );
}
export default Account;
