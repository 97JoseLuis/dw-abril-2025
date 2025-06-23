const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const router = express.Router();
const SECRET = process.env.JWT_SECRET;

// Middleware para auth
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token' });
  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: 'Token inválido' });
  }
}

// Middleware admin
function adminMiddleware(req, res, next) {
  if (!req.user.isAdmin) return res.status(403).json({ message: 'Acceso denegado' });
  next();
}

// GET /api/admin/users - lista usuarios
router.get('/users', authMiddleware, adminMiddleware, async (req, res) => {
  const users = await User.find({}, '-password');
  res.json(users);
});

// POST /api/admin/users - crear usuario
router.post('/users', authMiddleware, adminMiddleware, async (req, res) => {
  const { email, password, isAdmin } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashed, isAdmin });
  await user.save();
  res.status(201).json({ message: 'Usuario creado' });
});

// PUT /api/admin/users/:id - editar usuario
router.put('/users/:id', authMiddleware, adminMiddleware, async (req, res) => {
  const { email, password, isAdmin } = req.body;
  const updateData = { email, isAdmin };
  if (password) updateData.password = await bcrypt.hash(password, 10);
  await User.findByIdAndUpdate(req.params.id, updateData);
  res.json({ message: 'Usuario actualizado' });
});

// DELETE /api/admin/users/:id - borrar usuario
router.delete('/users/:id', authMiddleware, adminMiddleware, async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'Usuario borrado' });
});

module.exports = router;