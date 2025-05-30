import express from 'express';
const app = express();

const requestTimeLoggerMiddleware = (req, res, next) => {
    const start = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`Solicitud a ${req.method} ${req.url} procesada en ${duration} ms`);
    });

    next();
};

app.use(requestTimeLoggerMiddleware);

app.get('/tiempo', (_req, res) => {
    setTimeout(() => {
        res.send('¡Hola! Esta es la página de tiempo.');
    }, 500);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000...');
});