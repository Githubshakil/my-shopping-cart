import React from "react";
import { products } from "../dummy/products"; 




const ProductList = () => {
  return (
    <>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} >
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <button onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
