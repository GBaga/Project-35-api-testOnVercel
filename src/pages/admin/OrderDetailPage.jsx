import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../../services/order"; // adjust path if needed

export default function OrderDetailPage() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (orderId) {
      getOrder(orderId)
        .then((res) => {
          setOrder(res.data);
          setError(null);
        })
        .catch(() => setError("Failed to fetch order"))
        .finally(() => setLoading(false));
    } else {
      setError("Order ID is missing");
      setLoading(false);
    }
  }, [orderId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Order #{order._id}</h2>
      <p>Status: {order.status}</p>
      <p>Date: {new Date(order.createdAt).toLocaleString()}</p>

      <h3 className="text-xl mt-6 mb-2">Items</h3>
      <ul className="space-y-2">
        {order.items.map((item) => (
          <li key={item._id}>
            {item.name} × {item.quantity} — $
            {(item.price * item.quantity).toFixed(2)}
          </li>
        ))}
      </ul>

      <h3 className="text-xl mt-6">Total: ${order.totalAmount.toFixed(2)}</h3>
    </div>
  );
}
