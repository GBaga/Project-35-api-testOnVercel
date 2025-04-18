import { useEffect } from "react";
import useCart from "../hooks/useCart";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, updateCartItem, removeCartItem } = useCart();

  if (!cart) return <p className="p-4">Loading cart...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
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
          <div className="text-right mt-4">
            <p className="text-lg font-bold mb-2">
              Total: ${cart.totalAmount.toFixed(2)}
            </p>
            <Link
              to="/checkout"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
