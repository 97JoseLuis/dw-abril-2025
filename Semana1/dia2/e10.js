//npm init
//npm install prompt-sync


const prompt = require ("prompt-sync")();
function CalcularAreaCirculo(radio){
    if (radio <= 0){
        return "el radio debe ser un numero positivo.";
    }
    const area = Math.PI * Math.pow (radio, 2);
    return area.toFixed(2);
}

let n = parseInt(prompt("introduce un numero: "));
console.log(CalcularAreaCirculo(n));