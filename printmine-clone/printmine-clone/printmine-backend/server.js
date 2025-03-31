require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Load environment variables


// Connect to database
connectDB();
console.log("MongoDB URI:", process.env.MONGO_URI);


// Routes
app.use('/api/products', productRoutes);
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));