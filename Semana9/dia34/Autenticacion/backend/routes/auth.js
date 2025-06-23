const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

const SECRET = process.env.JWT_SECRET;

// POST /api/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Credenciales inválidas' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Credenciales inválidas' });

  const token = jwt.sign({ id: user._id, email: user.email, isAdmin: user.isAdmin }, SECRET, { expiresIn: '1h' });

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

module.exports = router;
