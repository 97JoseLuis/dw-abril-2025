require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

app.get('/api', (req, res) => {
  try {
    res.json({ message: '¡Hola desde la API de Express!' });
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
