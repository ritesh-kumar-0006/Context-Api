// context/CartContext.js
import React, { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ( props) => {
  const [counter, setCounter] = useState(0);

  

  return (
    <CounterContext.Provider value={{ counter,setCounter }}>
      {props.children}
    </CounterContext.Provider>
  );
};
