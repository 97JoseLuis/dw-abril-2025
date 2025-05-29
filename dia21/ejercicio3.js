import express, { json } from 'express';
import { readFile, writeFile, unlink } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = 3000;
app.use(json());

app.get('/archivo', (_req, res) => {
    const filePath = join(__dirname, 'mensaje.txt');

    readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error al leer el archivo.');
        }
        res.send(data);
    });
});

app.post('/guardar', (req, res) => {
    console.log(req.body);
    const { text } = req.body;
    if (!text) {
        return res.status(400).send('Falta el contenido en la solicitud.');
    }

    const filePath = join(__dirname, 'datos.txt');

    writeFile(filePath, text, 'utf-8', (err) => {
        if (err) {
            return res.status(500).send('Error al escribir el archivo.');
        }
        res.send('Archivo guardado correctamente.');
    });
});

app.delete('/borrar', (_req, res) => {
    const filePath = join(__dirname, 'datos.txt');

    unlink(filePath, (err) => {
        if (err) {
            return res.status(500).send('Error al borrar el archivo o archivo no encontrado.');
        }
        res.send('Archivo eliminado correctamente.');
    });
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
