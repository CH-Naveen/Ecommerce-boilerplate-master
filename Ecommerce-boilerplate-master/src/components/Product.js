import React, { useState, useEffect } from 'react';
import './Product.css';

function Product(props) {
  // Use state hooks to store the product data
  const [product, setProduct] = useState(null);

  // Use effect hook to fetch the product data from an API
  useEffect(() => {
    // Get the product id from the props
    const productId = props.match.params.id;
    // Fetch the product data using the product id
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [props.match.params.id]);

  // Handle the click events of the buy now and add to basket buttons
  const handleBuyNow = () => {
    // TODO: Add your logic to handle the buy now action
    alert(`You bought product ${product.id}`);
  };

  const handleAddToBasket = () => {
    // TODO: Add your logic to handle the add to basket action
    alert(`You added product ${product.id} to basket`);
  };

  // Render the product page
  return (
    <div className='product'>
      {product ? (
        <>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>${product.price}</p>
          <div className='buttons'>
            <button onClick={handleBuyNow}>Buy Now</button>
            <button onClick={handleAddToBasket}>Add to Basket</button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Product;
