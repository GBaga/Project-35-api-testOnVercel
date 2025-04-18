import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [cart, setCart] = useState(null);

  const fetchCart = async () => {
    try {
      const res = await axios.get("/api/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(res.data);
    } catch (err) {
      console.error("Fetch cart failed", err);
    }
  };

  const addToCart = async (productId, quantity) => {
    try {
      const res = await axios.post(
        "/api/cart",
        { productId, quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCart(res.data);
    } catch (err) {
      console.error("Add to cart failed", err);
    }
  };

  const updateCartItem = async (productId, quantity) => {
    try {
      const res = await axios.put(
        "/api/cart",
        { productId, quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCart(res.data);
    } catch (err) {
      console.error("Update item failed", err);
    }
  };

  const removeCartItem = async (productId) => {
    try {
      const res = await axios.delete(`/api/cart/item/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(res.data);
    } catch (err) {
      console.error("Remove item failed", err);
    }
  };

  const clearCart = async () => {
    try {
      const res = await axios.delete("/api/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(res.data.cart);
    } catch (err) {
      console.error("Clear cart failed", err);
    }
  };

  useEffect(() => {
    if (token) fetchCart();
  }, [token]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateCartItem, removeCartItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
