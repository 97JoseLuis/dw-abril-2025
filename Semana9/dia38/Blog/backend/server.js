const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); 

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

connectDB();

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});