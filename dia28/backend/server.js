const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error(err));

const productosRoutes = require('./routes/productos');
app.use('/productos', productosRoutes);

app.listen(5000, () => {
  console.log('Servidor escuchando en http://localhost:5000');
});

