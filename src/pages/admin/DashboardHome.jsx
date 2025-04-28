import AdminOrderCard from "../../components/AdminOrderCard";
import AdminSidebar from "../../components/AdminSidebar";
import OrdersPage from "../OrdersPage";
import AddProductPage from "./AddProductPage";
import EditProductPage from "./EditProductPage";
import OrderDetailPage from "./OrderDetailPage";
import ProductsPage from "./ProductsPage";
import ManageProducts from "./ManageProducts";

// DashboardHome.jsx

export default function DashboardHome() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <p>
        Welcome to the admin panel. Use the sidebar to manage products and
        orders.
      </p>

      <p>AdminSidebar</p>
      <AdminSidebar />
      <p>AdminOrderCard x</p>
      {/* <AdminOrderCard /> */}

      <p>OrdersPage</p>

      <p>manageProducts</p>
      <ManageProducts />
      <p>OrdersPage</p>
      <OrdersPage />

      <OrdersPage />
      <p>AddProductPage</p>
      <AddProductPage />
      <p>EditProductPage</p>
      <EditProductPage />
      <p>OrdersDetails</p>
      <OrderDetailPage />
      <p>ProducstPage</p>
      <ProductsPage />
    </div>
  );
}
