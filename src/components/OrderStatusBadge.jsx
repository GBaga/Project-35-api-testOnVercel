export default function OrderStatusBadge({ status }) {
  const colors = {
    pending: "bg-yellow-100 text-yellow-800",
    preparing: "bg-blue-100 text-blue-800",
    ready: "bg-green-100 text-green-800",
    completed: "bg-gray-200 text-gray-800",
    cancelled: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
        colors[status] || "bg-gray-100 text-gray-800"
      }`}
    >
      {status.toUpperCase()}
    </span>
  );
}
