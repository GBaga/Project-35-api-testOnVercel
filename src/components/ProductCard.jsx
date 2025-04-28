import useCart from "../hooks/useCart";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    console.log("Adding product to cart:", product._id);
    addToCart(product._id, 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      <div className="h-56 bg-gray-200">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <span className="text-lg font-bold text-red-600">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3 min-h-[4.5em]">
          {product.description}
        </p>
        <button
          onClick={handleAddToCart}
          className="w-full bg-red-600 text-white py-2 rounded font-medium hover:bg-red-700 transition cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
