import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/home/home';
import Cart from './pages/cart/cart';
import Placeorder from './pages/placeorder/placeorder';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {
  
  const [showLogin,setShowLogin] =useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/> :<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeorder' element={<Placeorder />} />
        <Route path='/order' element={<Placeorder/>}/>
      </Routes>
      <Footer/>
      </div>
    </>
  );
}

export default App;
