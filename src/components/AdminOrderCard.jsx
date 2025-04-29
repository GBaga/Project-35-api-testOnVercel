// src/components/AdminOrderCard.jsx
import React from "react";
import OrderStatusBadge from "./OrderStatusBadge";

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
    <div className="border p-4 rounded shadow-md flex flex-col gap-4">
      {/* Top Info */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <p className="font-bold text-lg">Order ID: {order._id}</p>
          <p className="text-gray-700 text-sm font-semibold">
            Customer: {order.user?.name || "Guest"}
          </p>
          {order.user?.email && (
            <p className="text-gray-600 text-sm">Email: {order.user.email}</p>
          )}
          {order.user?.mobile && (
            <p className="text-gray-600 text-sm">Mobile: {order.user.mobile}</p>
          )}
          {order.user?.secondMobile && (
            <p className="text-gray-600 text-sm">
              Second Mobile: {order.user.secondMobile}
            </p>
          )}
          <p className="text-gray-600 text-sm mt-1">
            Total: ${order.totalAmount?.toFixed(2)}
          </p>
        </div>

        {/* Dropdowns */}
        <div className="flex flex-col gap-2">
          {/* Current Status Badge */}
          <div>
            <OrderStatusBadge status={order.status} />
          </div>

          {/* Change Order Status */}
          <div>
            <label className="text-sm text-gray-700">
              Change Order Status:
            </label>
            <select
              value={order.status}
              onChange={handleStatusChange}
              className="border px-3 py-1 rounded mt-1 w-48"
            >
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="preparing">Preparing</option>
              <option value="ready">Ready</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          {/* Payment Status */}
          <div>
            <label className="text-sm text-gray-700">Payment Status:</label>
            <select
              value={order.paymentStatus}
              onChange={handlePaymentChange}
              className="border px-3 py-1 rounded mt-1 w-48"
            >
              <option value="pending">Pending</option>
              <option value="paid">Paid</option>
              <option value="failed">Failed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div className="mt-2">
        <p className="font-semibold">Items:</p>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          {order.items?.map((item) => (
            <li key={item._id}>
              {item.name} × {item.quantity}
            </li>
          ))}
        </ul>
      </div>

      {/* Optional Note */}
      {order.note && (
        <div className="mt-2">
          <p className="font-semibold">Note:</p>
          <p className="text-gray-600 text-sm">{order.note}</p>
        </div>
      )}
    </div>
  );
}
