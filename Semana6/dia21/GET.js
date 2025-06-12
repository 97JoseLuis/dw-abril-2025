import express from 'express';
import { readFile } from 'fs';
import { join } from 'path';

const app = express();
const PORT = 3000;

app.get('/archivo', (_req, res) => {
    const filePath = join(__dirname, 'archivo.txt');

    readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error al leer el archivo.');
        }
        res.send(data);
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
