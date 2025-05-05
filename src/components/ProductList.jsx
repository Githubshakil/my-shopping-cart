import React from "react";

// Sample data and function for demonstration purposes
const products = [
    { id: 1, name: "Product 1", price: 100.0, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore enim corrupti ab nobis accusamus amet cum id assumenda repudiandae?", image: "/images/image (1).jpg" },
    { id: 2, name: "Product 2", price: 250.0, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore enim corrupti ab nobis accusamus amet cum id assumenda repudiandae?", image: "/images/image (2).jpg" },
    { id: 3, name: "Product 3", price: 200.0, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore enim corrupti ab nobis accusamus amet cum id assumenda repudiandae?", image: "/images/image (3).jpg" },
    { id: 4, name: "Product 4", price: 280.0, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore enim corrupti ab nobis accusamus amet cum id assumenda repudiandae?", image: "/images/image (4).jpg" },
    { id: 5, name: "Product 5", price: 320.0, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore enim corrupti ab nobis accusamus amet cum id assumenda repudiandae?", image: "/images/image (5).jpg" },
    { id: 6, name: "Product 6", price: 400.0, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore enim corrupti ab nobis accusamus amet cum id assumenda repudiandae?", image: "/images/image (6).jpg" }  
];

const addToCart = (product) => {
  console.log(`${product.name} added to cart`);
};

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
