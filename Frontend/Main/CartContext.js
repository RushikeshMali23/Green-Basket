import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
  
    // Function to add a product to the cart
    const addToCart = (product) => {
      setCartItems((prevItems) => {
          return [...prevItems, { ...product}];
        })
      };


      const removeFromCart = (name) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.name !== name));
      };


      return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart}}>
          {children}
        </CartContext.Provider>
      );
    };