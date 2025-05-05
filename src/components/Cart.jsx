import React from 'react';




const Cart = ({ cart, changeQuantity, removeFromCart }) => {

  return (
   <>
    <div className="cart-items">
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-info">
              <h2>{item.name}</h2>
              <p>
                Price: {item.price.toFixed(2)} x {item.quantity} = TK
                {item.price * item.quantity}
              </p>
              <div className="quantity">
                <button onClick={() => changeQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => changeQuantity(item.id, 1)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
   </>
  );
};



export default Cart;
