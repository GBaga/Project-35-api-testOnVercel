import { createContext, useState, useEffect } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

if (!API) {
  throw new Error("API base URL is not defined in environment variables");
}

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      axios
        .get(`${API}/api/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUser(res.data))
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            console.error("Token expired or invalid");
            logout();
          } else {
            console.error("Error fetching user data:", error);
            logout();
          }
        });
    } else {
      setUser(null);
    }
  }, [token]);

  const login = (token, userData) => {
    localStorage.setItem("token", token);
    setToken(token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    console.info("User logged out");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
