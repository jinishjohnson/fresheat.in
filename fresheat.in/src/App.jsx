import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/home/home';
import Cart from './pages/cart/cart';
import Placeorder from './pages/placeorder/placeorder';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeorder' element={<Placeorder />} />
      </Routes>
    </div>
  );
}

export default App;
