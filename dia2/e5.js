//npm init
//npm install prompt-sync

const prompt = require("prompt-sync")();

function contieneLetraS(cadena){
    return console.log (cadena.includes('s'));
}

const cadena = prompt ("texto a comprobar: ");
contieneLetraS(cadena);