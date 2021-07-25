import React from "react"
import Main from '../../components/Main'
import Products from '../../pages/Features/Products/index'
import ProductsDetail from '../../pages/Features/Products/_id/index'
import { Route, BrowserRouter } from "react-router-dom";
function Features() {
  return (
    <div className="App">
    <BrowserRouter>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/products">
        <Products />
      </Route>
      <Route exact path="/products/:id" children={<ProductsDetail />} />
    </BrowserRouter>
    </div>
  );
}

export default Features;
