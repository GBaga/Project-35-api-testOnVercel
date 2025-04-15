import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Dashboard from "./Dashboard.jsx";
import MainLayout from "./components/MainLayout.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuPage from "./MenuPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
