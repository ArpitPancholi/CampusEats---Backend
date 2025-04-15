// server.js
const cors = require('cors');

const express = require('express');
const cookieParser = require('cookie-parser');
const { connect } = require('./config/database');
require('dotenv').config();

const passport = require('./config/passport');

const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');
const foodRoutes = require('./routes/foodRoutes');
const orderRoutes = require('./routes/orderRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const resetPasswordRoutes = require('./routes/resetPasswordRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const ratingReviewRoutes = require('./routes/ratingReviewRoutes');

const app = express();

// Middlewares
const corsOptions = {
  origin: 'http://localhost:3000', //React app's URL
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'], // HTTP methods
  credentials: true, // to allow credentials (cookies, authorization headers)
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());


// Connect Database
connect();

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/reset-password', resetPasswordRoutes);
app.use('/api/restaurant', restaurantRoutes);
app.use('/api/reviews', ratingReviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req, res) => {
    res.send('Server is up and running!');
  });
  