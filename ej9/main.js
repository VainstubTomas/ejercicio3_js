//Crear un bucle while que pida al usuario números hasta que introduzca un número negativo.

const numeros = []
let numero;

do{
    numero = parseInt(prompt("Ingrese un nro negativo para salir"));
    //solo guarda valores +
    if(numero >= 0){
        numeros.push(numero);
    }
} while (numero >= 0);

console.log(numeros);