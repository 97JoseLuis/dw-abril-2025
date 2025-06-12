import { createReadStream } from 'fs';

const streamFile = (fileName) => {
    console.log(`Leyendo archivo: ${fileName}`);
    
    const stream = createReadStream(fileName, { encoding: 'utf8' });

    stream.on('data', (chunk) => {
        console.log(`Fragmento leído de ${fileName}: ${chunk.length} bytes`);
    });

    stream.on('end', () => {
        console.log(`Finalizada la lectura de ${fileName}.\n`);
    });

    stream.on('error', (err) => {
        console.error(`Error al leer ${fileName}:`, err);
    });
};

streamFile('archivo_pequeño.txt'); // Archivo pequeño (<100 KB)
streamFile('archivo_mediano.txt'); // Archivo mediano (1-10 MB)
streamFile('archivo_grande.txt');  // Archivo grande (>100 MB)
