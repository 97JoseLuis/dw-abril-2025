const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); 
const cors = require('cors');

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

connectDB();

app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});