import React, { createContext, useEffect, useState } from "react";
import { SHOES } from "../shoelist";

export const CartContext = createContext(null);

const MyContext = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);

  useEffect(() => {
    console.log(cartItems, favoriteIds);
  }, [cartItems, favoriteIds]);

  //   add to cart function
  const addToCart = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (!item) {
      setCartItems([...cartItems, { id, count: 1 }]);
    } else {
      const updatedCart = cartItems.map((eachItem) => {
        if (eachItem.id === id) {
          return {
            ...eachItem,
            count: eachItem.count + 1,
          };
        }
        return eachItem;
      });
      setCartItems(updatedCart);
    }
  };

  // remove from cart function
  const removeFromCart = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      let updatedCart;
      if (item.count === 1) {
        updatedCart = cartItems.filter((item) => item.id !== id);
      } else {
        updatedCart = cartItems.map((eachItem) => {
          if (eachItem.id === id) {
            return {
              ...eachItem,
              count: eachItem.count - 1,
            };
          }
          return eachItem;
        });
      }
      setCartItems(updatedCart);
    }
  };

  // favorite shoe function
  const toggleFavorite = (id) => {
    const favoriteId = favoriteIds.find((fid) => fid === id);
    if (favoriteId) {
      const updateIds = favoriteIds.filter((fid) => fid !== id);
      setFavoriteIds(updateIds);
    } else {
      setFavoriteIds([...favoriteIds, id]);
    }
  };

  const getTotalAmount = () => {
    const totalAmount = cartItems.reduce((sum, item) => {
      const product = SHOES.find((product) => product.id === item.id);
      console.log(product);
      if (item.count === 1) {
        sum += product.price;
      } else {
        sum += product.price * item.count;
      }
      return sum;
    }, 0);
    return totalAmount.toFixed(2);
  };

  const updateCartItemCount = (count, id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      let updatedCart;
      if (count === 0) {
        updatedCart = cartItems.filter((item) => item.id !== id);
      } else {
        updatedCart = cartItems.map((eachItem) => {
          if (eachItem.id === id) {
            return {
              ...eachItem,
              count: count,
            };
          }
          return eachItem;
        });
      }
    }
    setCartItems(updatedCart);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    toggleFavorite,
    favoriteIds,
    getTotalAmount,
  };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default MyContext;
