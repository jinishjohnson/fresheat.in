// src/pages/home/Home.jsx
import React, { useState } from 'react';
import './home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';


const Home = () => {
    const [catagory,setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu catagory={catagory} setCategory={setCategory}/>
      <FoodDisplay catagory={catagory}/>
    </div>
  );
}

export default Home;
