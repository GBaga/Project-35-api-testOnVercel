// src/components/AdminOrderCard.jsx
import React from "react";

export default function AdminOrderCard({
  order,
  onStatusChange,
  onPaymentStatusChange,
}) {
  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    onStatusChange(order._id, newStatus);
  };

  const handlePaymentChange = (e) => {
    const newPaymentStatus = e.target.value;
    onPaymentStatusChange(order._id, newPaymentStatus);
  };

  return (
    <div className="border p-4 rounded shadow-md flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold">Order ID: {order._id}</p>
          <p className="text-sm text-gray-600">
            User: {order.user?.name || "Guest"}
          </p>
          <p className="text-sm text-gray-600">
            Total: ${order.totalAmount?.toFixed(2)}
          </p>
        </div>

        {/* Status */}
        <div className="flex flex-col gap-2">
          <select
            value={order.status}
            onChange={handleStatusChange}
            className="border px-3 py-1 rounded"
          >
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>

          {/* Payment Status */}
          <select
            value={order.paymentStatus}
            onChange={handlePaymentChange}
            className="border px-3 py-1 rounded"
          >
            <option value="pending">Payment Pending</option>
            <option value="paid">Paid</option>
          </select>
        </div>
      </div>

      {/* Optional: List items */}
      <div className="mt-2">
        <p className="font-semibold">Items:</p>
        {order.items?.map((item) => (
          <p key={item._id} className="text-sm">
            {item.product?.name || "Product"} × {item.quantity}
          </p>
        ))}
      </div>
    </div>
  );
}
