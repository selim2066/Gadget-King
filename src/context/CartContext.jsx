import React, { createContext, useState } from "react";

export const CartContexts = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(cart)
  };

  return (
    <CartContexts.Provider value={{ cart, addToCart }}>
      {children}
    </CartContexts.Provider>
  );
};

export default CartContext;
