//npm init
//npm install prompt-sync

const prompt = require ("prompt-sync")();

let n1 = parseInt(prompt("introduce el primer numero: "));
let n2 = parseInt(prompt("introduce el segundo numero: "));
let r = n1 + n2;

console.log(`el resultado es ${r}`)