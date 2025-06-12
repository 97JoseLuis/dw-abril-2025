import { createServer } from 'http';

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hola Mundo');
});

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});
