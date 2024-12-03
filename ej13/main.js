//Imprimir los múltiplos de 3 del 1 al 30 usando un bucle do...while.

const multiplosDeTresMenoresTreinta = [];
let multiplo;
let i = 0;
const numero = 3;

do{
    multiplo = 3 * i;
    i++;
    //solo guardo los multiplos menores a 30
    if(multiplo < 30){
        multiplosDeTresMenoresTreinta.push(multiplo);
    }
}while(multiplo < 30);

console.log(multiplosDeTresMenoresTreinta);