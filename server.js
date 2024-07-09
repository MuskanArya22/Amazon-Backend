const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/UserRoutes');

const app = express();

app.use(express.json());

// Connect to database
connectDB();

// Use Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
