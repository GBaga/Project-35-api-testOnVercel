// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./pages/App.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import MainLayout from "./components/MainLayout.jsx";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MenuPage from "./pages/MenuPage.jsx";
// import { AuthProvider } from "./context/AuthContext";
// import { CartProvider } from "./context/CartContext.jsx";

// import RegisterPage from "./pages/RegisterPage.jsx";
// import LoginPage from "./pages/LoginPage.jsx";
// import HomePage from "./pages/HomePage.jsx";
// import AdminOrdersPage from "./pages/AdminOrdersPage.jsx";
// import AdminDashboard from "./pages/AdminDashboard.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <AuthProvider>
//         <CartProvider>
//           <Routes>
//             <Route element={<MainLayout />}>
//               {/* <Route path="/" element={<App />} /> */}
//               <Route path="/" element={<HomePage />} />

//               <Route path="/menu" element={<MenuPage />} />
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/register" element={<RegisterPage />} />
//               <Route path="/login" element={<LoginPage />} />
//               <Route path="/adminorders" element={<AdminOrdersPage />} />
//               <Route path="/AdminDashboard" element={<AdminDashboard />} />
//             </Route>
//           </Routes>
//         </CartProvider>
//       </AuthProvider>
//     </BrowserRouter>
//   </StrictMode>
// );

// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
