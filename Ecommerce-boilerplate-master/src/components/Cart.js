import React, { useState, useEffect } from 'react';
import './Cart.css';

function Cart() {
  // Use state hooks to store the cart data
  const [cart, setCart] = useState([]);
 
  // Use effect hook to fetch the cart data from local storage or an API
  useEffect(() => {
    // Get the cart data from local storage or an API
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    // Set the cart data to the state
    setCart(cartData);
  }, []);

  // Handle the change events of the quantity selectors
  const handleQuantityChange = (id, value) => {
    // Update the cart data with the new quantity
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: value } : item
    );
    // Set the cart data to the state
    setCart(updatedCart);
    // Save the cart data to local storage or an API
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Handle the click events of the remove buttons
  const handleRemove = (id) => {
    // Filter out the item with the given id from the cart data
    const updatedCart = cart.filter((item) => item.id !== id);
    // Set the cart data to the state
    setCart(updatedCart);
    // Save the cart data to local storage or an API
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Handle the click event of the place order button
  const handlePlaceOrder = () => {
    // TODO: Add your logic to handle the place order action
    alert(`You placed an order for ${cart.length} items`);
  };

  // Calculate the total price of the cart items
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Render the cart page
  return (
    <div className='cart'>
      <h1>ShopKart.</h1>
      <nav>
        <a href='/products'>Products</a>
        <a href='/logout'>Logout</a>
      </nav>
      <div className='cart-items'>
        {cart.map((item) => (
          <div className='cart-item' key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p>₹ {item.price}</p>
            <div className='quantity'>
              <label>Quantity</label>
              <input
                type='number'
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.id, e.target.value)
                }
                min='0'
              />
            </div>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className='price-details'>
        <p>Price: ₹ {totalPrice}</p>
        <p>Discount Price: ₹ {totalPrice * 0.05}</p>
        <p>Delivery Charge: ₹ {totalPrice * 0.1}</p>
        <p>Total Amount Payable: ₹ {totalPrice * 0.95}</p>
        <button onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </div>
  );
}

export default Cart;
