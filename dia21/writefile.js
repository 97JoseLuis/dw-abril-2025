import { writeFile } from 'fs';

const contenido = 'Hola Mundo!';
const nombreArchivo = 'mensaje.txt';

writeFile(nombreArchivo, contenido, (err) => {
    if (err) {
        console.error('Error al escribir el archivo:', err);
    } else {
        console.log(`El mensaje ha sido guardado en ${nombreArchivo}.`);
    }
});
