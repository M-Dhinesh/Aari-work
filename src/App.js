import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/gallery" element={<Gallery/>} /> 
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
