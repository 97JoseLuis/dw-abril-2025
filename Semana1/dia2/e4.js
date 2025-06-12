//npm init
//npm install prompt-sync

const prompt = require("prompt-sync")();

function saludar(nombre){
    console.log(`¡Hola, ${nombre}!`);
}

function procesarEntradaUsuario() {
    const nombre = prompt("porfavor, ingrese su nombre: ");
    saludar(nombre);
}

procesarEntradaUsuario();