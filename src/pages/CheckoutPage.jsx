import { useState } from "react";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";
import { createOrder } from "../services/order";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const { token } = useAuth();
  const navigate = useNavigate();

  const [pickupTime, setPickupTime] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [note, setNote] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderData = { pickupTime, paymentMethod, note };
      await createOrder(orderData, token);
      clearCart();
      navigate("/orders");
    } catch (err) {
      console.error(err);
    }
  };

  if (!cart || cart.items.length === 0)
    return <p className="p-4">Your cart is empty.</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="datetime-local"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="cash">Cash</option>
          <option value="card">Card</option>
          <option value="online">Online</option>
        </select>
        <textarea
          placeholder="Add a note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="border rounded px-3 py-2"
        ></textarea>
        <button
          type="submit"
          className="bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
