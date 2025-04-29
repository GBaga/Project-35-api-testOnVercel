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
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await getAllOrders(token);
      setOrders(res.data);
    } catch (err) {
      console.error("Failed to fetch orders:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await updateOrderStatus(orderId, newStatus, token);
      await fetchOrders(); // Reload orders
    } catch (err) {
      console.error("Failed to update order status:", err);
    }
  };

  const handlePaymentChange = async (orderId, newPaymentStatus) => {
    try {
      await updatePaymentStatus(orderId, newPaymentStatus, token);
      await fetchOrders(); // Reload orders
    } catch (err) {
      console.error("Failed to update payment status:", err);
    }
  };

  if (loading) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold">Loading Orders...</h2>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-600">No orders found.</p>
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
