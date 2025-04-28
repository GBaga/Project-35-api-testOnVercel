// src/hooks/useCart.js
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function useCart() {
  const { cart, loading, addItem, updateItem, removeItem, clearCart } =
    useContext(CartContext);

  return {
    cart,
    loading, // <== NEW
    addToCart: addItem,
    updateCartItem: updateItem,
    removeCartItem: removeItem,
    clearCart,
  };
}
