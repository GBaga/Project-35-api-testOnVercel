import { createContext, useState, useEffect, useContext } from "react";
import {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
  clearCart as clearCartAPI,
} from "../services/cart";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [cart, setCart] = useState({ items: [], totalAmount: 0 });
  const [loading, setLoading] = useState(true);

  const loadCart = async () => {
    const savedToken = localStorage.getItem("authToken");
    if (!savedToken) {
      setCart({ items: [], totalAmount: 0 });
      setLoading(false);
      return; // ✅ Just exit early, no API call
    }

    try {
      setLoading(true);
      const res = await getCart();
      if (res?.data) {
        setCart(res.data);
      }
    } catch (error) {
      console.error("Failed to fetch cart:", error);
      setCart({ items: [], totalAmount: 0 });
    } finally {
      setLoading(false);
    }
  };

  const addItem = async (productId, quantity = 1) => {
    try {
      await addToCart(productId, quantity); // ✅ no token passed
      await loadCart();
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

  const updateItem = async (productId, quantity) => {
    try {
      await updateCartItem(productId, quantity); // ✅ no token passed
      await loadCart();
    } catch (error) {
      console.error("Failed to update cart item:", error);
    }
  };

  const removeItem = async (productId) => {
    try {
      await removeCartItem(productId); // ✅ no token passed
      await loadCart();
    } catch (error) {
      console.error("Failed to remove cart item:", error);
    }
  };

  const clearCart = async () => {
    try {
      await clearCartAPI(); // ✅ no token passed
      setCart({ items: [], totalAmount: 0 });
    } catch (error) {
      console.error("Failed to clear cart:", error);
    }
  };

  useEffect(() => {
    loadCart();
  }, [token]);

  return (
    <CartContext.Provider
      value={{ cart, loading, addItem, updateItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
