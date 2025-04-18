import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-100 min-h-screen p-4 shadow-md">
      <h2 className="text-lg font-bold mb-4">Admin Panel</h2>
      <nav className="flex flex-col gap-3">
        <Link to="/admin/products" className="hover:text-red-600">
          Manage Products
        </Link>
        <Link to="/admin/orders" className="hover:text-red-600">
          Manage Orders
        </Link>
      </nav>
    </aside>
  );
}
