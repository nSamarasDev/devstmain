const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');

const app = express();

// connect to db
connectDB();

// init middleware

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cookieParser());

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define routes
app.use('/api/users', require('./routes/api/user'));
app.use('/api/contact', require('./routes/api/contact'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/application', require('./routes/api/application'));
app.use('/api/company', require('./routes/api/company'));
app.use('/api/loadboard', require('./routes/api/loadBoard'));

// updated routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
