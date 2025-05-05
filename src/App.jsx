import './App.css'
import React from 'react'
import { useState } from 'react';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
function App() {
   const [cart, setCart] = useState([]);
   const products = [
        { id: 1, name: "Product 1", price: 100.0, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore enim corrupti ab nobis accusamus amet cum id assumenda repudiandae?", image: "/images/image (1).jpg" },
        { id: 2, name: "Product 2", price: 250.0, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore enim corrupti ab nobis accusamus amet cum id assumenda repudiandae?", image: "/images/image (2).jpg" },
        { id: 3, name: "Product 3", price: 200.0, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore enim corrupti ab nobis accusamus amet cum id assumenda repudiandae?", image: "/images/image (3).jpg" },
        { id: 4, name: "Product 4", price: 280.0, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore enim corrupti ab nobis accusamus amet cum id assumenda repudiandae?", image: "/images/image (4).jpg" },
        { id: 5, name: "Product 5", price: 320.0, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore enim corrupti ab nobis accusamus amet cum id assumenda repudiandae?", image: "/images/image (5).jpg" },
        { id: 6, name: "Product 6", price: 400.0, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore enim corrupti ab nobis accusamus amet cum id assumenda repudiandae?", image: "/images/image (6).jpg" }                
    ];
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
