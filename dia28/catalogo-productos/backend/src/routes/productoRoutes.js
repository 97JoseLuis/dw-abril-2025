const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Obtener todos los productos
router.get('/productos', productoController.obtenerProductos);

// Obtener un producto por ID
router.get('/productos/:id', productoController.obtenerProducto);

// Crear un nuevo producto
router.post('/productos', productoController.crearProducto);

// Actualizar un producto por ID
router.put('/productos/:id', productoController.actualizarProducto);

// Eliminar un producto por ID
router.delete('/productos/:id', productoController.eliminarProducto);

module.exports = router;