const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Bearer TOKEN
    if (!token) return res.status(403).json({ message: 'No token provided' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Failed to authenticate token' });
        req.userId = decoded.id; // Añade el ID del usuario a la request
        next();
    });
};
module.exports = verifyToken;