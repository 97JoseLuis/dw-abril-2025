function loggerMiddleware(req, res, next) {
    const fecha = new Date().toISOString();
    const url = req.originalUrl;

    console.log(`[${fecha}] Solicitud recibida en: ${url}`);

    next(); 
}

export default loggerMiddleware;