import express, { json } from 'express';
const app = express();

const errorHandlerMiddleware = (err, _req, res, _next) => {
    console.error(`Error: ${err.message}`);

    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Error interno del servidor'
    });
};

app.use(json());

app.get('/error', (_req, _res, next) => {
    const error = new Error('Algo salió mal');
    error.status = 400;
    next(error);
});

app.use(errorHandlerMiddleware);

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000...');
});