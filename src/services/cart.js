// src/services/cart.js

import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

// Utility function to get the token
const getAuthToken = () => localStorage.getItem("authToken");

// Check if the token exists
const checkTokenValidity = (token) => {
  if (!token) {
    console.error("No authentication token available");
    return false;
  }
  return true;
};

// Get user's cart
export const getCart = () => {
  const token = getAuthToken();
  if (!checkTokenValidity(token)) return;

  return axios
    .get(`${API}/api/cart`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((err) => {
      console.error("Error fetching cart:", err.response?.data || err.message);
      throw err;
    });
};

// Add item to cart
export const addToCart = (productId, quantity) => {
  const token = getAuthToken();
  if (!checkTokenValidity(token)) return;

  return axios
    .post(
      `${API}/api/cart`,
      { productId, quantity },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .catch((err) => {
      console.error("Error adding to cart:", err.response?.data || err.message);
      throw err;
    });
};

// Update cart item quantity
export const updateCartItem = (productId, quantity) => {
  const token = getAuthToken();
  if (!checkTokenValidity(token)) return;

  return axios
    .put(
      `${API}/api/cart`,
      { productId, quantity },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .catch((err) => {
      console.error(
        "Error updating cart item:",
        err.response?.data || err.message
      );
      throw err;
    });
};

// Remove item from cart
export const removeCartItem = (productId) => {
  const token = getAuthToken();
  if (!checkTokenValidity(token)) return;

  return axios
    .delete(`${API}/api/cart/item/${productId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((err) => {
      console.error(
        "Error removing item from cart:",
        err.response?.data || err.message
      );
      throw err;
    });
};

// Clear cart
export const clearCart = () => {
  const token = getAuthToken();
  if (!checkTokenValidity(token)) return;

  return axios
    .delete(`${API}/api/cart`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((err) => {
      console.error("Error clearing cart:", err.response?.data || err.message);
      throw err;
    });
};
