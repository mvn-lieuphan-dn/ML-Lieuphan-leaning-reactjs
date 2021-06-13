import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Home from './components/Home';
import About from './components/About';

function App() {
  const [page, setPage] = useState('home');

  function handleChangePage(page){
    setPage(page)
  }

  return (
    <div className="App">
      <Header handleChangePage={handleChangePage}/>
      <main class="main-page">
        <div class="container">
          {(page === 'home') && <Home />}
          {(page === 'about') && <About />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
