// router/index.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import OrdersPage from "../pages/OrdersPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import DashboardHome from "../pages/admin/DashboardHome";
import ProductsPage from "../pages/admin/ProductsPage";
import AddProductPage from "../pages/admin/AddProductPage";
import EditProductPage from "../pages/admin/EditProductPage";
import AdminOrdersPage from "../pages/admin/OrdersPage";
import OrderDetailPage from "../pages/admin/OrderDetailPage";

import PrivateRoute from "../components/PrivateRoute";
import MainLayout from "../components/MainLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />

        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <OrdersPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <DashboardHome />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <PrivateRoute>
              <ProductsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/products/new"
          element={
            <PrivateRoute>
              <AddProductPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/products/edit/:id"
          element={
            <PrivateRoute>
              <EditProductPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <PrivateRoute>
              <AdminOrdersPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/orders/:id"
          element={
            <PrivateRoute>
              <OrderDetailPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}
