const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
  const { postId, content } = req.body;

  const newComment = new Comment({
    content,
    post: postId,
    author: req.user
  });

  try {
    await newComment.save();
    res.status(201).json({ message: 'Comentario creado', comment: newComment });
  } catch (err) {
    res.status(500).json({ message: 'Error al crear el comentario', error: err.message });
  }
};

exports.getComments = async (req, res) => {
  const { postId } = req.params;

  try {
    const comments = await Comment.find({ post: postId }).populate('author', 'username');
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener comentarios', error: err.message });
  }
};
