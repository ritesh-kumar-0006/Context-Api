import React from "react";
import Cart from "./Cart";
import Counter  from "./Counter";
import{CounterProvider} from "./context/CounterContext"
import { CartProvider } from "./context/CartContext";
 const App = () => {
  return (
    <CartProvider>
      <CounterProvider>
        <Cart />
        <Counter/>
      </CounterProvider>
    </CartProvider>
  );
};
export default App;