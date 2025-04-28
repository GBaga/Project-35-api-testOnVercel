import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../services/product";
import useAuth from "../../hooks/useAuth";
import ProductForm from "../../components/ProductForm";

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: 0,
    imageUrl: "",
    category: "burger",
    description: "",
    isAvailable: true,
  });

  const { token } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct(formData, token);
    navigate("/admin/products");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <ProductForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
