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
  const { token } = useAuth();

  const fetchOrders = async () => {
    const res = await getAllOrders(token);
    setOrders(res.data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, status) => {
    await updateOrderStatus(orderId, status, token);
    fetchOrders();
  };

  const handlePaymentChange = async (orderId, paymentStatus) => {
    await updatePaymentStatus(orderId, paymentStatus, token);
    fetchOrders();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Orders</h2>
      {orders.map((order) => (
        <AdminOrderCard
          key={order._id}
          order={order}
          onStatusChange={handleStatusChange}
          onPaymentStatusChange={handlePaymentChange}
        />
      ))}
    </div>
  );
}
