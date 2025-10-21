import { useState, useRef } from "react";
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

  const fileInputRef = useRef(null); // 🔹 Used to reset the file input

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Build FormData for backend
    const data = new FormData();
    data.append("name", form.name);
    data.append("description", form.description);
    data.append("price", form.price);
    data.append("category", form.category);
    data.append("cuisine", form.cuisine);
    data.append("image", form.image);

    try {
      // ✅ Use proxy: no need for full backend URL
      const res = await axios.post("/api/menudata", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.item) {
        alert("✅ Food item uploaded successfully!");
        console.log("Saved item:", res.data.item);

        // Reset all fields
        setForm({
          name: "",
          description: "",
          price: "",
          category: "",
          cuisine: "",
          image: null,
        });

        // ✅ Reset the image input manually
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        alert("Upload failed. Check console for details.");
        console.log(res.data);
      }
    } catch (err) {
      console.error("❌ Upload error:", err);
      alert("An error occurred while uploading.");

      // ✅ Also clear image field on error
      if (fileInputRef.current) fileInputRef.current.value = "";
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
          <option value="Appetizer">Appetizer</option>
          <option value="Main Course">Main Course</option>
          <option value="Side Dish">Side Dish</option>
          <option value="Dessert">Dessert</option>
          <option value="Beverage">Beverage</option>
          <option value="Snack">Snack</option>
          <option value="Salad">Salad</option>
          <option value="Soup">Soup</option>
          <option value="Bread">Bread</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Rice & Noodles">Rice & Noodles</option>
          <option value="Street Food">Street Food</option>
          <option value="Grill / BBQ">Grill / BBQ</option>
          <option value="Curry">Curry</option>
          <option value="Sandwich / Burger">Sandwich / Burger</option>
          <option value="Pizza / Pasta">Pizza / Pasta</option>
          <option value="Seafood">Seafood</option>
          <option value="Vegan / Vegetarian">Vegan / Vegetarian</option>
          <option value="Non-Veg Special">Non-Veg Special</option>
          <option value="Combo / Thali">Combo / Thali</option>
        </select>

        <select
          name="cuisine"
          onChange={handleChange}
          value={form.cuisine}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select Cuisine</option>
          <option value="Indian">Indian</option>
          <option value="Chinese">Chinese</option>
          <option value="Italian">Italian</option>
          <option value="American">American</option>
          <option value="Thai">Thai</option>
          <option value="Mexican">Mexican</option>
          <option value="Japanese">Japanese</option>
          <option value="Korean">Korean</option>
          <option value="Mediterranean">Mediterranean</option>
          <option value="Continental">Continental</option>
          <option value="French">French</option>
          <option value="Mughlai">Mughlai</option>
          <option value="South Indian">South Indian</option>
          <option value="North Indian">North Indian</option>
          <option value="Bengali">Bengali</option>
          <option value="Punjabi">Punjabi</option>
          <option value="Gujarati">Gujarati</option>
          <option value="Rajasthani">Rajasthani</option>
          <option value="Lebanese">Lebanese</option>
          <option value="Turkish">Turkish</option>
          <option value="Indonesian">Indonesian</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="African">African</option>
          <option value="Fusion">Fusion</option>
          <option value="Global / Multi-Cuisine">Global / Multi-Cuisine</option>
        </select>

        <input
          type="file"
          name="image"
          ref={fileInputRef} // 🔹 This lets us reset the image field
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
