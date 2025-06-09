const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');

// GET /productos
router.get('/', async (req, res) => {
  const productos = await Producto.find();
  res.json(productos);
});

// GET /productos/:id
router.get('/:id', async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) return res.status(404).json({ error: 'No encontrado' });
    res.json(producto);
  } catch {
    res.status(400).json({ error: 'ID inválido' });
  }
});

// POST /productos
router.post('/', async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    const productoGuardado = await nuevoProducto.save();
    res.status(201).json(productoGuardado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT /productos/:id
router.put('/:id', async (req, res) => {
  try {
    const productoActualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(productoActualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /productos/:id
router.delete('/:id', async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Producto eliminado' });
  } catch {
    res.status(400).json({ error: 'Error al eliminar' });
  }
});

module.exports = router;