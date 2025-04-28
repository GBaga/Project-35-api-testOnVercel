// src/pages/admin/AdminOrdersPage.jsx
import { useEffect, useState } from "react";
import {
  getAllOrders,
  updateOrderStatus,
  updatePaymentStatus,
} from "../../services/order";
import useAuth from "../../hooks/useAuth";
import AdminOrderCard from "../../components/AdminOrderCard";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  const fetchOrders = async () => {
    if (!token) return;

    try {
      setLoading(true);
      const res = await getAllOrders(token);
      setOrders(res.data.orders || []); // assuming backend returns { orders: [...] }
    } catch (err) {
      console.error(
        "Failed to fetch orders:",
        err.response?.data || err.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [token]);

  const handleStatusChange = async (orderId, status) => {
    try {
      await updateOrderStatus(orderId, status, token);
      fetchOrders(); // refresh orders
    } catch (err) {
      console.error(
        "Failed to update order status:",
        err.response?.data || err.message
      );
    }
  };

  const handlePaymentChange = async (orderId, paymentStatus) => {
    try {
      await updatePaymentStatus(orderId, paymentStatus, token);
      fetchOrders(); // refresh orders
    } catch (err) {
      console.error(
        "Failed to update payment status:",
        err.response?.data || err.message
      );
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Orders</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading orders...</p>
      ) : orders.length === 0 ? (
        <p className="text-center text-gray-400">No orders found.</p>
      ) : (
        <div className="grid gap-6">
          {orders.map((order) => (
            <AdminOrderCard
              key={order._id}
              order={order}
              onStatusChange={handleStatusChange}
              onPaymentStatusChange={handlePaymentChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}
