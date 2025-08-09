import React, { createContext, useState } from "react";

export const CartContexts = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const addWish = (item) => {
    setWish([...wish, item]);
  };

  // remove cart
  const removeCart = (id) => {
    setCart(cart.filter((itemId) => itemId.product_id !== id));
  };

  // remove wishList
  const removeWish = (id)=>{
    setWish(wish.filter(item => item.product_id !== id))
  }
  // console.log(cart)//
  return (
    <CartContexts.Provider value={{ cart, addToCart, addWish, wish, removeCart, removeWish }}>
      {children}
    </CartContexts.Provider>
  );
};

export default CartContext;
