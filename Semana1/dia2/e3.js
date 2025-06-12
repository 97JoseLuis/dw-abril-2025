//npm init
//npm install prompt-sync

const prompt = require("prompt-sync")();

function mostrarTabladeMultiplicar(numero){
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }

}

let n = parseInt(prompt("Introduce un numero: "));
mostrarTabladeMultiplicar(n);