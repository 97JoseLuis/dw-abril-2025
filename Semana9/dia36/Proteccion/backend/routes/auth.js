const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

const SECRET = process.env.JWT_SECRET;

// Middleware para verificar JWT (no requiere admin)
function requireAuth(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: 'No token' });
  try {
    const token = auth.split(' ')[1];
    const payload = jwt.verify(token, SECRET);
    req.user = payload;
    next();
  } catch {
    return res.status(401).json({ message: 'Token inválido' });
  }
}

// POST /api/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Usuario no encontrado' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ message: 'Contraseña incorrecta' });

  const token = jwt.sign(
    { id: user._id, email: user.email, isAdmin: user.isAdmin },
    SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
});

// POST /api/register
router.post('/register', async (req, res) => {
  const { email, password, isAdmin } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Email y contraseña requeridos' });

  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: 'El usuario ya existe' });

  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashed, isAdmin: !!isAdmin });
  await user.save();

  res.status(201).json({ message: 'Usuario creado correctamente' });
});

// GET /api/protected (ruta protegida para pruebas)
router.get('/protected', requireAuth, (req, res) => {
  res.json({ message: 'Ruta protegida', user: req.user });
});

module.exports = router;
