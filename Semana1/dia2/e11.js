//npm init
//npm install prompt-sync


const prompt = require ("prompt-sync")();

function potencia(base, exponente){
    return Math.pow (base, exponente);
}

let n1 = parseInt(prompt("introduce base: "));
let n2 = parseInt(prompt("introduce exponente: "));
console.log(potencia(n1, n2));