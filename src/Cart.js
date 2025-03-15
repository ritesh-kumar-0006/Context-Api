// Cart.js
import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";

const Cart = () => {
  const {cart,setCart} = useContext(CartContext);

  const addToCart = (item) => {
    setCart([...cart, item]);
    };
    
    
  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
    };
    
  return (
    <div>
      <h2>Shopping Cart</h2>
      <h2>Shopping Cart</h2>
      <button onClick={() => addToCart({ id: 1, name: "Laptop" })}>
        Add Laptop
          </button>
          
          <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Cart;
