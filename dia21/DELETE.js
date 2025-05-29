import express from 'express';
import { unlink } from 'fs';
import { join } from 'path';

const app = express();
const PORT = 3000;

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
