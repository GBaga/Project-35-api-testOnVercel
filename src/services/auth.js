import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

export const register = (data) => axios.post(`${API}/api/auth/register`, data);

export const login = (data) => axios.post(`${API}/api/auth/login`, data);

export const getMe = (token) =>
  axios.get(`${API}/api/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
