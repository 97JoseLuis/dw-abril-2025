//npm init
//npm install prompt-sync

const prompt = require("prompt-sync")();

function esParOImpar(numero){
    if (numero % 2 === 0){
        return "el numero es par";
    } else {
        return "el numero es impar";
    }
}

let n = parseInt(prompt("introduce un numero: "));
console.log(esParOImpar(n));