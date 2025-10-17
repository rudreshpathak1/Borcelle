const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Path to FoodItems.json (make sure this exists)
const foodFile = path.join(__dirname, "../FoodItems.json");

// API to get all food items
app.get("/food-items", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(foodFile, "utf-8"));
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
