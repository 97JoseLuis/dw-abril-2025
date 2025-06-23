const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

const SECRET = process.env.JWT_SECRET;

// Middleware para verificar token y admin
function requireAdmin(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: 'No token' });
  try {
    const token = auth.split(' ')[1];
    const payload = jwt.verify(token, SECRET);
    if (!payload.isAdmin) return res.status(403).json({ message: 'Solo admin' });
    req.user = payload;
    next();
  } catch {
    return res.status(401).json({ message: 'Token inválido' });
  }
}

// Obtener todos los usuarios
router.get('/users', requireAdmin, async (req, res) => {
  const users = await User.find({}, '-password');
  res.json(users);
});

// Crear usuario
router.post('/users', requireAdmin, async (req, res) => {
  const { email, password, isAdmin } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Email y contraseña requeridos' });
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: 'El usuario ya existe' });
  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashed, isAdmin: !!isAdmin });
  await user.save();
  res.status(201).json({ message: 'Usuario creado correctamente' });
});

// Actualizar usuario
router.put('/users/:id', requireAdmin, async (req, res) => {
  const { email, password, isAdmin } = req.body;
  const update = { email, isAdmin: !!isAdmin };
  if (password) update.password = await bcrypt.hash(password, 10);
  await User.findByIdAndUpdate(req.params.id, update);
  res.json({ message: 'Usuario actualizado' });
});

// Borrar usuario
router.delete('/users/:id', requireAdmin, async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'Usuario eliminado' });
});

module.exports = router;