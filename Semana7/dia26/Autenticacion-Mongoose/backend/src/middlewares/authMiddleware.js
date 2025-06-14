module.exports = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ message: 'No estás autorizado a acceder a esta ruta.' });
};