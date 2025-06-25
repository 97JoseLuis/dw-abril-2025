require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { authMiddleware, adminMiddleware } = require('./authMiddleware');

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const usersController = require('./controllers/usersController');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB conectado');
}).catch(console.error);

app.use('/api', authRoutes);
app.use('/api/admin', adminRoutes);

// Ruta protegida (requiere JWT)
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Ruta protegida', user: req.user });
});

// Ruta solo para admins
app.get('/api/users', authMiddleware, adminMiddleware, usersController);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));