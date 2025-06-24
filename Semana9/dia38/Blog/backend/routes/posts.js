const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const authMiddleware = require('../middleware/authMiddleware');

// Obtener posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las publicaciones' });
  }
});

// Crear post (protegido)
router.post('/', authMiddleware, async (req, res) => {
  const { title, content, image } = req.body;
  try {
    const newPost = new Post({
      title,
      content,
      image,
      author: req.user.id // El id del usuario autenticado
    });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la publicación', error: error.message });
  }
});

module.exports = router;
