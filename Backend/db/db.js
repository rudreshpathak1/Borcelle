const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/borcelle'; // your DB name

async function connectDB() {
    try {
        await mongoose.connect(mongoURI); // no options needed
        console.log('MongoDB connected successfully!');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

connectDB();
