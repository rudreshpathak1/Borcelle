import { useState } from "react";
import axios from "axios";

const AdminPage = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    cuisine: "",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(form).forEach((key) => data.append(key, form[key]));

    try {
      const res = await axios.post("http://localhost:5000/upload-food", data);
      if (res.data.success) {
        alert("Food item uploaded successfully!");
        setForm({
          name: "",
          description: "",
          price: "",
          category: "",
          cuisine: "",
          image: null,
        });
      }
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Upload Food Item</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={form.name}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          value={form.description}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          value={form.price}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <select
          name="category"
          onChange={handleChange}
          value={form.category}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select Category</option>
          <option value="Pizza">Pizza</option>
          <option value="Burger">Burger</option>
          <option value="Snacks">Snacks</option>
          <option value="Pasta">Pasta</option>
          <option value="Wraps">Wraps</option>
        </select>

        <select
          name="cuisine"
          onChange={handleChange}
          value={form.cuisine}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select Cuisine</option>
          <option value="Italian">Italian</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Chinese">Chinese</option>
          <option value="Beverages">Beverages</option>
        </select>

        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-primary hover:bg-orange-600 text-white font-semibold py-2 rounded transition"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
