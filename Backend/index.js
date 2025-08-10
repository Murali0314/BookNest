import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// Routes
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';

// Load environment variables from .env
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI; //  Make sure your .env has MONGO_URI for Atlas

// Connect to MongoDB Atlas
const connectDB = async () => {
  try {
    await mongoose.connect(URI); // Mongoose 6+ doesn't need extra options
    console.log(' Connected to MongoDB Atlas');
  } catch (error) {
    console.error(' Error connecting to MongoDB:', error.message);
    process.exit(1); // Stop server if DB connection fails
  }
};

connectDB();

// Routes
app.use("/api/books", bookRoute);

app.use('/user', userRoute);

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Start server
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
