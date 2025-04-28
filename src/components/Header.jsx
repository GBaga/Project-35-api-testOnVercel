import { Link } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

import {
  FaShoppingCart,
  FaUser,
  FaSignOutAlt,
  FaClipboardList,
  FaBars,
  FaTimes,
  FaTachometerAlt,
} from "react-icons/fa";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const { cart, clearCart } = useContext(CartContext); // ✅ Only use clearCart (not setCart)
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const userMenuRef = useRef(null);

  const handleLogout = () => {
    logout(); // ✅ logout user
    clearCart(); // ✅ clear cart
    setUserMenuOpen(false);
    setMenuOpen(false);
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        window.innerWidth < 768
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-red-600 text-white p-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-bold">
          FastFood
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation - Desktop */}
        <nav
          ref={menuRef}
          className={`${
            menuOpen
              ? "flex flex-col absolute top-16 left-0 right-0 bg-red-600 shadow-lg z-20 py-4"
              : "hidden"
          } md:flex md:flex-row md:static md:shadow-none md:py-0 md:items-center md:gap-6`}
        >
          <Link
            to="/menu"
            className="px-6 md:px-0 py-2 md:py-0 text-white hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Menu
          </Link>

          <Link
            to="/cart"
            className="px-6 md:px-0 py-2 md:py-0 relative text-white hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            <FaShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-white text-red-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart?.items?.length || 0}
            </span>
          </Link>

          {user ? (
            <div
              className="relative px-6 md:px-0 py-2 md:py-0"
              ref={userMenuRef}
            >
              {/* User Avatar with Dropdown Toggle */}
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <FaUser size={14} />
                </div>
                <span className="font-medium">{user.name}</span>
              </div>

              {/* Dropdown Menu */}
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 bg-white text-red-600 rounded-lg shadow-md border border-gray-100 w-48 z-30">
                  <div className="py-1">
                    {user.isAdmin ? (
                      <Link
                        to="/admin"
                        className="flex items-center gap-2 py-2 px-3 hover:bg-gray-50 transition-colors"
                        onClick={() => {
                          setUserMenuOpen(false);
                          setMenuOpen(false);
                        }}
                      >
                        <FaTachometerAlt size={14} />
                        <span>Control Panel</span>
                      </Link>
                    ) : (
                      <Link
                        to="/orders"
                        className="flex items-center gap-2 py-2 px-3 hover:bg-gray-50 transition-colors"
                        onClick={() => {
                          setUserMenuOpen(false);
                          setMenuOpen(false);
                        }}
                      >
                        <FaClipboardList size={14} />
                        <span>My Orders</span>
                      </Link>
                    )}

                    <button
                      onClick={handleLogout} // ✅ unified logout
                      className="flex items-center gap-2 w-full text-left py-2 px-3 hover:bg-gray-50 transition-colors"
                    >
                      <FaSignOutAlt size={14} />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col md:flex-row px-6 md:px-0 gap-2 md:gap-3">
              <Link
                to="/login"
                className="py-2 text-center md:px-4 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="py-2 text-center md:px-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-md hover:shadow-md transition-all"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
