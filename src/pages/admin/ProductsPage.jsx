// src/pages/admin/ProductsPage.jsx

import { useState, useEffect } from "react";
import { getProducts, deleteProduct } from "../../services/product";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data.products || []);
    } catch (error) {
      console.error(
        "Failed to fetch products:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      await deleteProduct(productId);
      setProducts((prev) => prev.filter((p) => p._id !== productId));
    } catch (error) {
      console.error(
        "Failed to delete product:",
        error.response?.data || error.message
      );
    }
  };

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-600">Loading products...</div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Products</h2>
        <Link
          to="/admin/products/new"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Add Product
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="text-center text-gray-500">No products found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-lg">
            <thead className="bg-red-600 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Category</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Available</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product._id} className="hover:bg-gray-100">
                  <td className="py-3 px-6">{product.name}</td>
                  <td className="py-3 px-6 capitalize">{product.category}</td>
                  <td className="py-3 px-6">${product.price.toFixed(2)}</td>
                  <td className="py-3 px-6">
                    {product.isAvailable ? "Yes" : "No"}
                  </td>
                  <td className="py-3 px-6 flex gap-2">
                    <Link
                      to={`/admin/products/edit/${product._id}`}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
