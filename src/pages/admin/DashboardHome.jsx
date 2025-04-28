import { Link } from "react-router-dom";

export default function DashboardHome() {
  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p className="text-gray-700 mb-8">
        Welcome to the admin panel. Use the navigation links below to manage
        products and orders.
      </p>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Manage:</h2>
        <nav className="flex flex-col gap-4">
          <Link
            to="/admin/products"
            className="text-red-600 hover:underline text-lg"
          >
            ➔ Manage Products
          </Link>
          <Link
            to="/admin/orders"
            className="text-red-600 hover:underline text-lg"
          >
            ➔ Manage Orders
          </Link>
        </nav>
      </div>
    </div>
  );
}
