//Imprimir los elementos de un array usando un bucle for.

const array = ["Messi", "Di Maria", "Dibu", "Cuti"];

for(let i = 0; i < 4; i++){
    console.log(array[i]);
}

//agrego elementos a un array ingresados por el usuario y los imprimo

console.log("TEST");

const arrayTest = [];

for(let x = 0; x < 5; x++){
    arrayTest.push(parseInt(prompt("Ingrese un numero")));
    console.log(arrayTest[x]);
}
