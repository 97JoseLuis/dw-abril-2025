const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'El nombre de usuario y la contraseña son obligatorios.' });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'El nombre de usuario ya está en uso.' }); 
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'Usuario registrado con éxito.' });

  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor al intentar registrar el usuario.', error: error.message });
  }
};


exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'El nombre de usuario y la contraseña son obligatorios.' });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas.' });
    }


    const payload = {
      id: user._id,
      username: user.username,
    };

    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(200).json({
      message: 'Inicio de sesión exitoso.',
      token,
      user: {
        id: user._id,
        username: user.username
      }
    });

  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor al intentar iniciar sesión.', error: error.message });
  }
};