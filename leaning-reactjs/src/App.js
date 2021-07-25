import React from "react"
import Header from './components/Header'
import Footer from './components/Footer'
import './assets/scss/styles.scss'
import Features from './pages/Features'
import Account from './pages/Account/index'
import {BrowserRouter, Route } from "react-router-dom"
import PrivateRoute from "./guard/PrivateRoute"
import Auth from "./pages/Auth/index"
function App() {
  return (
    <div className="App">
      <Header />
      <main className="page-main flex-centered">
        <BrowserRouter>
          <PrivateRoute path="/account">
            <Route path="/">
              <Account />
            </Route>
          </PrivateRoute>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/">
            <Features />
          </Route>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
