import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: "",
    imageUrl: "",
    category: "",
    description: "",
    isAvailable: true,
  });
  const [editingProductId, setEditingProductId] = useState(null);

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/products`);
      const data = await res.json();
      setProducts(data.products || []);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editingProductId ? "PATCH" : "POST";
    const url = editingProductId
      ? `${API_BASE}/api/products/${editingProductId}`
      : `${API_BASE}/api/products`;

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to save product");

      setForm({
        name: "",
        price: "",
        quantity: "",
        imageUrl: "",
        category: "",
        description: "",
        isAvailable: true,
      });
      setEditingProductId(null);
      fetchProducts();
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/api/products/${id}`, {
        method: "DELETE",
      });
      if (res.ok) fetchProducts();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditingProductId(product._id);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Admin Dashboard
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Product name"
          required
          className="border p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          required
          className="border p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="quantity"
          type="number"
          value={form.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          required
          className="border p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          className="border p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="border p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-1 md:col-span-2"
        />
        <label className="flex items-center gap-2">
          <input
            name="isAvailable"
            type="checkbox"
            checked={form.isAvailable}
            onChange={handleChange}
            className="cursor-pointer"
          />
          Available
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg col-span-1 md:col-span-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {editingProductId ? "Update Product" : "Add Product"}
        </button>
      </form>

      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Product List
      </h2>
      {products.length === 0 ? (
        <p className="text-center text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="mb-4">
                <img
                  src={p.imageUrl || "https://via.placeholder.com/150"}
                  alt={p.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="font-semibold text-xl text-gray-800">
                  {p.name}
                </h3>
                <p className="text-lg text-gray-600">{p.price}₾</p>
                <p className="text-gray-500">{p.quantity} pcs</p>
                <p className="text-sm text-gray-500">{p.category}</p>
                <p className="text-sm text-gray-400">{p.description}</p>
                <p
                  className={`text-sm font-medium ${
                    p.isAvailable ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {p.isAvailable ? "Available" : "Out of stock"}
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => handleEdit(p)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(p._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
