const express = require('express');
const adminMiddleware = require('../middleware/adminMiddleware');
const Post = require('../models/Post');
const User = require('../models/User');

const router = express.Router();

router.get('/users', adminMiddleware, async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.delete('/posts/:id', adminMiddleware, async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByIdAndDelete(id);
  if (!post) {
    return res.status(404).json({ message: 'Publicación no encontrada' });
  }
  res.status(200).json({ message: 'Publicación eliminada correctamente' });
});

module.exports = router;
