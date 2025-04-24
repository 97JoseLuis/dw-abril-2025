function mostrarSerieFibonacci(){
    const cantidad = 10;
    let fibonacci = [0, 1];
    
    for (let i = 2; i < cantidad; i++){
        fibonacci[i] = fibonacci [i - 1] + fibonacci [i - 2];
    }
    
    console.log ("Los primeros 10 numeros de la serie fibonacci son: ");
    console.log (fibonacci.join(", "));
}

mostrarSerieFibonacci();