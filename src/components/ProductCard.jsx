import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="rounded-lg shadow-md p-4 bg-white">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="font-semibold text-lg mt-2">{product.name}</h3>
      <p className="text-red-600 font-bold">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product._id, 1)}
        className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
