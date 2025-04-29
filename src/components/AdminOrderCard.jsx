import React from "react";
import OrderStatusBadge from "./OrderStatusBadge";
import { Mail, Phone, Smartphone, FileText } from "lucide-react";

export default function AdminOrderCard({
  order,
  onStatusChange,
  onPaymentStatusChange,
}) {
  const handleStatusChange = (e) => {
    onStatusChange(order._id, e.target.value);
  };

  const handlePaymentChange = (e) => {
    onPaymentStatusChange(order._id, e.target.value);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 transition hover:shadow-lg border border-gray-100">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="space-y-1">
          <p className="text-lg font-semibold text-gray-900">
            Order <span className="text-blue-600">#{order._id.slice(-6)}</span>
          </p>
          <p className="text-sm text-gray-700 font-medium">
            {order.user?.name || "Guest"}
          </p>

          {/* Contact Info */}
          <div className="text-sm text-gray-500 space-y-1 mt-2">
            {order.user?.email && (
              <p className="flex items-center gap-1">
                <Mail size={14} /> {order.user.email}
              </p>
            )}
            {order.user?.mobile && (
              <p className="flex items-center gap-1">
                <Smartphone size={14} /> {order.user.mobile}
              </p>
            )}
            {order.user?.secondMobile && (
              <p className="flex items-center gap-1">
                <Phone size={14} /> {order.user.secondMobile}
              </p>
            )}
            <p className="font-semibold text-gray-700">
              Total: ${order.totalAmount?.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-3 w-full md:w-60">
          <div>
            <OrderStatusBadge status={order.status} />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1 font-medium">
              Order Status
            </label>
            <select
              value={order.status}
              onChange={handleStatusChange}
              className="w-full rounded border px-3 py-2 text-sm"
            >
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="preparing">Preparing</option>
              <option value="ready">Ready</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1 font-medium">
              Payment Status
            </label>
            <select
              value={order.paymentStatus}
              onChange={handlePaymentChange}
              className="w-full rounded border px-3 py-2 text-sm"
            >
              <option value="pending">Pending</option>
              <option value="paid">Paid</option>
              <option value="failed">Failed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Items */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-1">Items:</p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          {order.items?.map((item) => (
            <li key={item._id}>
              {item.name} × {item.quantity}
            </li>
          ))}
        </ul>
      </div>

      {/* Note */}
      {order.note && (
        <div className="bg-gray-50 p-3 rounded flex gap-2 items-start">
          <FileText size={16} className="mt-0.5 text-gray-500" />
          <div>
            <p className="text-sm font-medium text-gray-600">Note:</p>
            <p className="text-sm text-gray-700">{order.note}</p>
          </div>
        </div>
      )}
    </div>
  );
}
