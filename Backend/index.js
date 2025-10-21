const express = require('express');
const multer = require('multer');
const fs = require('fs').promises; // promises version for async/await
const cloudinary = require('./cloudinaryConfig.cjs');
const sharp = require('sharp');
const Menu = require('./models/Menu'); // <- use your Menu model
var cors = require('cors');

require('./db/db');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

app.use(express.json()); // parse JSON body

// Configure multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // folder name
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

// POST route to add a full menu item
app.post('/api/menudata', upload.single('image'), async (req, res) => {
    if (!req.file) return res.status(400).send('Image is required.');

    try {
        // Compress the image under ~200 KB
        const compressedPath = 'uploads/compressed-' + req.file.filename;
        let quality = 90;
        let buffer = await sharp(req.file.path)
            .resize({ width: 1024 })
            .jpeg({ quality })
            .toBuffer();

        while (buffer.length / 1024 > 200 && quality > 10) {
            quality -= 10;
            buffer = await sharp(req.file.path)
                .resize({ width: 1024 })
                .jpeg({ quality })
                .toBuffer();
        }

        await sharp(buffer).toFile(compressedPath);

        // Upload compressed image to Cloudinary
        const result = await cloudinary.uploader.upload(compressedPath);
        console.log('Cloudinary URL:', result.secure_url);

        // Save full menu item to MongoDB
        const { name, description, price, category, cuisine } = req.body;
        const newMenuItem = new Menu({
            name,
            description,
            price,
            category,
            cuisine,
            image: result.secure_url
        });

        const savedItem = await newMenuItem.save();
        console.log('Saved:', savedItem);

        // Delete local files
        fs.unlink(req.file.path).catch(err => console.error(err));
        fs.unlink(compressedPath).catch(err => console.error(err));

        res.json({
            message: 'Menu item added successfully!',
            item: savedItem
        });

    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).send('An error occurred while adding the menu item.');
    }
});

// GET route to fetch all menu items
app.get('/api/menu', async (req, res) => {
    try {
        const menuItems = await Menu.find().sort({ createdAt: -1 }); 
        res.json(menuItems);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching menu items');
    }
});

// Simple test route
app.get('/', (req, res) => {
    res.send('Hello Backend from Express!');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
