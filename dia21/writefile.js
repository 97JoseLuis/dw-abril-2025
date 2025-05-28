import { writeFile } from 'fs';

const contenido = 'Hola, este es un mensaje guardado en un archivo de texto.';
const nombreArchivo = 'mensaje.txt';

writeFile(nombreArchivo, contenido, (err) => {
    if (err) {
        console.error('Error al escribir el archivo:', err);
    } else {
        console.log(`El mensaje ha sido guardado en ${nombreArchivo}.`);
    }
});
