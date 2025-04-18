export default function ProductForm({ formData, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={onChange}
        required
        className="border px-3 py-2 rounded"
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={onChange}
        required
        className="border px-3 py-2 rounded"
      />
      <input
        type="text"
        name="imageUrl"
        placeholder="Image URL"
        value={formData.imageUrl}
        onChange={onChange}
        className="border px-3 py-2 rounded"
      />
      <select
        name="category"
        value={formData.category}
        onChange={onChange}
        className="border px-3 py-2 rounded"
      >
        <option value="burger">Burger</option>
        <option value="pizza">Pizza</option>
        <option value="drink">Drink</option>
        <option value="dessert">Dessert</option>
        <option value="other">Other</option>
      </select>
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={onChange}
        className="border px-3 py-2 rounded"
      />
      <button
        type="submit"
        className="bg-red-600 text-white py-2 rounded hover:bg-red-700"
      >
        Save Product
      </button>
    </form>
  );
}
