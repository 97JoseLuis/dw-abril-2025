import express from 'express';
const app = express();

const BLOCKED_IP = '172.26.64.1';

const ipBlockerMiddleware = (req, res, next) => {
    if (req.ip === BLOCKED_IP) {
        console.log(`Solicitud bloqueada de la IP: ${req.ip}`);
        return res.status(403).send('Acceso prohibido');
    }
    next();
};

app.use(ipBlockerMiddleware);

app.get('/IP', (_req, res) => {
    res.send('¡Bienvenido! Esta es la página de IP.');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});