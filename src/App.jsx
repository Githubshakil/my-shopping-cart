import './App.css'
import React from 'react'
import { useState } from 'react';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import { products } from './dummy/products';
function App() {
   const [cart, setCart] = useState([]);
   
  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id)
      return itemExists
        ? prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevCart, { ...product, quantity: 1 }]
    });
  };
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }
  const changeQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + change, 1) }
          : item
      )
    );
  };
  return(
<>
    <div className='shopping-cart'>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} changeQuantity={changeQuantity} />
    </div>
</>
  );


}
export default App;
