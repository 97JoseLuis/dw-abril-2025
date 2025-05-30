import pkg from 'jsonwebtoken';
const { verify } = pkg;

const SECRET_KEY = 'tu_clave_secreta';

function authMiddleware(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: '403 Forbidden' });
    }

    try {
        const decoded = verify(token.replace('Bearer ', ''), SECRET_KEY);
        req.user = decoded; 
        next();
    } catch (error) {
        return res.status(403).json({ message: '403 Forbidden' });
    }
}

export default authMiddleware;