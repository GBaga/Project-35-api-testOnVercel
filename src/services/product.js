import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

export const getProducts = () => axios.get(`${API}/api/products`);

export const getProduct = (id) => axios.get(`${API}/api/products/${id}`);

export const createProduct = (data, token) =>
  axios.post(`${API}/api/products`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updateProduct = (id, data, token) =>
  axios.patch(`${API}/api/products/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteProduct = (id, token) =>
  axios.delete(`${API}/api/products/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
