import { useEffect, useState } from "react";
import { getAllOrders } from "../../services/order"; // adjust path if needed
import AdminOrderCard from "../../components/AdminOrderCard"; // ✅ correct import
import useAuth from "../../hooks/useAuth";

export default function OrdersPage() {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (token) {
      getAllOrders(token)
        .then((res) => setOrders(res.data))
        .catch((err) => console.error("Failed to fetch orders", err));
    }
  }, [token]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map((order) => (
          <AdminOrderCard
            key={order._id}
            order={order}
            onStatusChange={() => {}} // Optional: Hook these
            onPaymentStatusChange={() => {}} // Optional
          />
        ))
      )}
    </div>
  );
}
