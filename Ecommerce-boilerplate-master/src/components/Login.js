import React, { useState } from 'react';
import Home from './Home';
function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div>
    <header>
     
      <h1>
        ShopKart.
      </h1>
      <nav>
        <a href="/products">Products</a>
        <a href="./Home" >Login</a>
        <a href="/cart">Cart</a>
        </nav>
    </header>
    <div className="login">
    
      <form onSubmit={handleSubmit}>
        <label>Email Address</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>New user? <a href="/register">Create an account</a></p>
    </div>
    </div>
  );
}

export default Login;

