const jwt = require('jsonwebtoken');
const { jwtSecret } = require('./config');

const protect = (req, res, next) => {
  let token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ message: 'No se ha proporcionado un token de autenticación' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token no válido' });
  }
};

module.exports = protect;
