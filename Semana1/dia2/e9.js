//npm init
//npm install prompt-sync


const prompt = require ("prompt-sync")();

function CalcularAreaRectangulo(alto, ancho){
    return alto * ancho / 2;
}

let n1 = parseInt(prompt("introduce el alto: "));
let n2 = parseInt(prompt("introduce el ancho: "));
console.log(CalcularAreaRectangulo(n1, n2)); // 50