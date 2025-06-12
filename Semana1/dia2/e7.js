//npm init
//npm install prompt-sync


const prompt = require ("prompt-sync")();

function elevarASiMismo(numero){
    return Math.pow (numero, numero);
}

let n = parseInt(prompt("introduce un numero: "));
console.log(elevarASiMismo(n));