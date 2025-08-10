import React, { createContext, useState } from "react";

export const CartContexts = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  //const [count, setCount] = useState(0)

  const addToCart = (item) => {
    setCart([...cart, item]);
    // setCount(count + 1)
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

  const count=cart.length
  return (
    <CartContexts.Provider value={{ cart, addToCart, addWish, wish, removeCart, removeWish, count }}>
      {children}
    </CartContexts.Provider>
  );
};



export default CartContext;
