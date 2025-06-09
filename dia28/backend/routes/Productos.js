const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');

// GET todos
router.get('/', async (req, res) => {
  const productos = await Producto.find();
  res.json(productos);
});

// GET uno
router.get('/:id', async (req, res) => {
  const producto = await Producto.findById(req.params.id);
  res.json(producto);
});

// POST
router.post('/', async (req, res) => {
  const nuevo = new Producto(req.body);
  const saved = await nuevo.save();
  res.json(saved);
});

// PUT
router.put('/:id', async (req, res) => {
  const actualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(actualizado);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Producto.findByIdAndDelete(req.params.id);
  res.json({ message: 'Producto eliminado' });
});

module.exports = router;
