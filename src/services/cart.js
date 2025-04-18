import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

export const getCart = (token) =>
  axios.get(`${API}/api/cart`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addItemToCart = (productId, quantity, token) =>
  axios.post(
    `${API}/api/cart`,
    { productId, quantity },
    { headers: { Authorization: `Bearer ${token}` } }
  );

export const updateCartItem = (productId, quantity, token) =>
  axios.put(
    `${API}/api/cart`,
    { productId, quantity },
    { headers: { Authorization: `Bearer ${token}` } }
  );

export const removeCartItem = (productId, token) =>
  axios.delete(`${API}/api/cart/item/${productId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const clearCart = (token) =>
  axios.delete(`${API}/api/cart`, {
    headers: { Authorization: `Bearer ${token}` },
  });
