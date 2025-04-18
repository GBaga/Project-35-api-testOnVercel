// ProductsPage.jsx
import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../../services/product";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res.data.products));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this product?")) {
      await deleteProduct(id);
      setProducts(products.filter((p) => p._id !== id));
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Manage Products</h2>
        <Link
          to="/admin/products/new"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add New
        </Link>
      </div>
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">${product.price}</td>
              <td className="border p-2">{product.category}</td>
              <td className="border p-2 space-x-2">
                <Link
                  to={`/admin/products/edit/${product._id}`}
                  className="text-blue-600"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
