import express, { json } from 'express';
import { writeFile } from 'fs';
import { join } from 'path';

const app = express();
const PORT = 3000;

app.use(json());

app.post('/guardar', (req, res) => {
    const { contenido } = req.body;
    
    if (!contenido) {
        return res.status(400).send('Falta el contenido en la solicitud.');
    }

    const filePath = join(__dirname, 'datos.txt');

    writeFile(filePath, contenido, 'utf-8', (err) => {
        if (err) {
            return res.status(500).send('Error al escribir el archivo.');
        }
        res.send('Archivo guardado correctamente.');
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
