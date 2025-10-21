const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String }, // e.g., "Main Course", "Beverage"
  cuisine: { type: String },  // e.g., "Indian", "Italian"
  image: { type: String, required: true } // Cloudinary URL
}, { timestamps: true });

const Menu = mongoose.model('menu_list', menuSchema);

module.exports = Menu;
