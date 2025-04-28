import OrderStatusBadge from "./OrderStatusBadge";

export default function AdminOrderCard({
  order,
  onStatusChange,
  onPaymentStatusChange,
}) {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">Order #{order._id.slice(-6)}</h3>
        <OrderStatusBadge status={order.status} />
      </div>
      <p className="text-sm">Customer: {order.user?.name}</p>
      <p className="text-sm">Total: ${order.totalAmount}</p>
      <div className="flex gap-4 mt-2">
        <select
          value={order.status}
          onChange={(e) => onStatusChange(order._id, e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="pending">Pending</option>
          <option value="preparing">Preparing</option>
          <option value="ready">Ready</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <select
          value={order.paymentStatus}
          onChange={(e) => onPaymentStatusChange(order._id, e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="pending">Payment Pending</option>
          <option value="paid">Paid</option>
          <option value="failed">Failed</option>
        </select>
      </div>
    </div>
  );
}
