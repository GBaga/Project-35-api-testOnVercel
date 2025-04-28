import useCart from "../hooks/useCart";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, loading, updateCartItem, removeCartItem } = useCart();

  if (loading) {
    return <p className="p-4">Loading your cart...</p>;
  }

  if (!cart || cart.items.length === 0) {
    return <p className="p-4">Your cart is empty.</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      <div className="space-y-4">
        {cart.items.map((item) => (
          <CartItem
            key={item.product._id}
            item={item}
            onUpdate={updateCartItem}
            onRemove={removeCartItem}
          />
        ))}
      </div>

      <div className="text-right mt-6">
        <p className="text-lg font-bold mb-2">
          Total: ${cart.totalAmount.toFixed(2)}
        </p>
        <Link
          to="/checkout"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded transition"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
