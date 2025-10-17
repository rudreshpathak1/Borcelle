// server.cjs
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const sharp = require("sharp");
const cloudinary = require("./cloudinaryConfig.cjs");
const stream = require("stream");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const foodFile = path.join(__dirname, "../FoodItems.json");

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Compress image buffer (~250KB)
async function compressBuffer(buffer) {
  const TARGET_SIZE = 250 * 1024;
  let quality = 80;
  let compressed = await sharp(buffer).jpeg({ quality }).toBuffer();

  while (compressed.length > TARGET_SIZE && quality > 10) {
    quality -= 5;
    compressed = await sharp(buffer).jpeg({ quality }).toBuffer();
  }
  return compressed;
}

// GET food items
app.get("/food-items", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(foodFile, "utf-8"));
    res.json({ success: true, data });
  } catch (err) {
    console.error("Error reading FoodItems.json:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST upload food item
app.post("/upload-food", upload.single("image"), async (req, res) => {
  try {
    console.log("=== NEW UPLOAD REQUEST ===");
    console.log("req.body:", req.body);
    console.log("req.file:", req.file);

    const { name, description, price, category, cuisine } = req.body;

    if (!req.file) {
      console.error("No file uploaded!");
      return res.status(400).json({ success: false, error: "No image uploaded" });
    }

    // Compress the image
    const compressedBuffer = await compressBuffer(req.file.buffer);

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "foodItems" },
        (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            reject(error);
          } else {
            console.log("Cloudinary upload success:", result.secure_url);
            resolve(result);
          }
        }
      );
      const bufferStream = new stream.PassThrough();
      bufferStream.end(compressedBuffer);
      bufferStream.pipe(uploadStream);
    });

    // Read existing food items
    const foodData = JSON.parse(fs.readFileSync(foodFile, "utf-8"));

    // Find the last ID (fixed)
    const lastId = foodData.length > 0 ? Math.max(...foodData.map(item => item.id)) : 0;

    // Add new item
    const newItem = {
      id: lastId + 1, // Sequential ID
      name,
      description,
      price,
      category,
      cuisine,
      image: result.secure_url,
    };
    foodData.push(newItem);

    // Save back to JSON
    fs.writeFileSync(foodFile, JSON.stringify(foodData, null, 2));

    res.json({ success: true, data: newItem });
  } catch (err) {
    console.error("UPLOAD FAILED:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
