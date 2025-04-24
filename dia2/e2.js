//npm init
//npm install prompt-sync

const prompt = require("prompt-sync")();


function saludar() {
    const nombre = prompt("por favor, ingresa tu nombre:");
    console.log(`hola ${nombre}`);
}

saludar();