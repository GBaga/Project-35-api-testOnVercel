import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/product";
import useCart from "../hooks/useCart";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    getProduct(id).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-red-600 text-lg font-semibold mt-2">
        ${product.price.toFixed(2)}
      </p>
      <p className="mt-4">{product.description}</p>
      <button
        onClick={() => addToCart(product._id, 1)}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
