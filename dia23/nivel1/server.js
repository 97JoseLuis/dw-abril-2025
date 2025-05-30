import express from 'express';
import loggerMiddleware from './loggerMiddleware.js';
import authMiddleware from './authMiddleware.js';

const app = express();

app.use(loggerMiddleware);

app.use('/ruta-protegida', authMiddleware, (req, res) => {
    res.json({ message: 'Acceso concedido', usuario: req.user });
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});