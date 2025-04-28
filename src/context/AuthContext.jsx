// src/context/AuthContext.js
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

if (!API) {
  throw new Error("API base URL is not defined in environment variables");
}

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      localStorage.setItem("authToken", token); // ✅ correct key
      fetchUserProfile(token);
    } else {
      localStorage.removeItem("authToken"); // ✅
      setUser(null);
    }
  }, [token]);

  const fetchUserProfile = async (token) => {
    try {
      const res = await axios.get(`${API}/api/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    } catch (error) {
      console.error("Error fetching user profile:", error);

      if (error.response?.status === 401) {
        logout();
        alert("Session expired. Please log in again.");
      }
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${API}/api/auth/login`, {
        email,
        password,
      });
      const { token } = res.data;

      // ✅ Save token immediately
      localStorage.setItem("authToken", token);

      setToken(token);
      console.log("Login successful");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("authToken"); // ✅
    console.info("Logged out");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
