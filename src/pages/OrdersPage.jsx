// OrdersPage.jsx
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { getUserOrders } from "../services/order";
import OrderCard from "../components/OrderCard";

export default function OrdersPage() {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getUserOrders(token).then((res) => setOrders(res.data));
  }, [token]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>
      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}
