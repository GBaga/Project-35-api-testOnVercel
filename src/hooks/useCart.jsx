import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function useCart() {
  const { cart, loading, addItem, updateItem, removeItem, clearCart, setCart } =
    useContext(CartContext);

  return {
    cart,
    loading,
    addToCart: addItem,
    updateCartItem: updateItem,
    removeCartItem: removeItem,
    clearCart,
    setCart, // ✅ Now also return setCart
  };
}
