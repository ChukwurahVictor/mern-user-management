require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(cors());

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Database connection
connectDB();

// Routes
app.use('/api/users', require('./routers/users'));

// 404 errors
app.use((req, res, next) => {
   const error = new Error('Not found!')
   error.statusCode = 404
   next(error)
})

// Error handling
app.use(errorHandler);

// Port config
const port = process.env.PORT || 5000;

app.listen(port, () => {
   console.log(`Server running on port ${port}`);
})