import OrderStatusBadge from "./OrderStatusBadge";

export default function OrderCard({ order }) {
  return (
    <div className="border rounded p-4 shadow-sm bg-white mb-4">
      <h3 className="font-semibold text-lg mb-2">Order #{order._id}</h3>
      <p className="text-sm text-gray-600 mb-2">
        Placed on: {new Date(order.createdAt).toLocaleString()}
      </p>
      <OrderStatusBadge status={order.status} />
      <p className="mt-2 font-semibold">
        Total: ${order.totalAmount.toFixed(2)}
      </p>
    </div>
  );
}
