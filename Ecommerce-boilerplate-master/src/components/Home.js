import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

function Home() {
  // Render the home page
  return (
    <div className='home'>
      <h1>ShopKart.</h1>
      <div className='products'>
        {/* Use the Link component to link to the product page */}
        <Link to='/product/1'>
          <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops' />
          <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
          <p>$109.95</p>
        </Link>
        {/* Repeat for other products */}
      </div>
    </div>
  );
}

export default Home;
