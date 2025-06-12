import express from 'express';
const app = express();

let requestCount = 0;

const requestCounterMiddleware = (_req, _res, next) => {
    requestCount++;
    console.log(`Número de solicitudes recibidas: ${requestCount}`);
    next();
};

app.use(requestCounterMiddleware);

app.get('/conteo', (_req, res) => {
    res.send('¡Hola! Esta es la página de conteo.');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});