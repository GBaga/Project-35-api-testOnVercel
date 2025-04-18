// OrderDetailPage.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../../services/order";
import useAuth from "../../hooks/useAuth";

export default function OrderDetailPage() {
  const { id } = useParams();
  const { token } = useAuth();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    getOrder(id, token).then((res) => setOrder(res.data));
  }, [id]);

  if (!order) return <p className="p-4">Loading order details...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Order Detail</h2>
      <p>
        <strong>Order ID:</strong> {order._id}
      </p>
      <p>
        <strong>Status:</strong> {order.status}
      </p>
      <p>
        <strong>Payment:</strong> {order.paymentStatus}
      </p>
      <p>
        <strong>Total:</strong> ${order.totalAmount}
      </p>
      <h3 className="mt-4 font-semibold">Items</h3>
      <ul className="list-disc ml-6">
        {order.items.map((item, index) => (
          <li key={index}>
            {item.name} x {item.quantity} (${item.price})
          </li>
        ))}
      </ul>
    </div>
  );
}
