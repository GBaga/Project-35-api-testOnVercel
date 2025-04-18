import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <Link to="/" className="text-2xl font-bold text-red-600">
        FastFood
      </Link>

      <nav className="flex items-center gap-6">
        <Link to="/menu" className="hover:text-red-600">
          Menu
        </Link>
        <Link to="/cart" className="relative">
          <FaShoppingCart size={20} />
        </Link>
        {user ? (
          <div className="relative group">
            <button className="font-medium">{user.name}</button>
            <div className="absolute hidden group-hover:block bg-white border rounded mt-2 p-2">
              <Link to="/orders" className="block py-1 px-3">
                My Orders
              </Link>
              <button
                onClick={logout}
                className="block py-1 px-3 text-left w-full"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
