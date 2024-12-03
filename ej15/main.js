//Contar el número de intentos hasta que el usuario adivine un número secreto usando un bucle do...while.


//generacion de num aleatorio entre el valor maximo
const max = 10; // Número máximo
const numero = Math.floor(Math.random() * max); //el random genera cualquier numero (int o float), lo multiplica por el valor maximo y el floor lo redondea para hacer un entero.
let intento;
let i = 1;

alert("Se genero un numero aleatorio entre 0 y 10, adivinalo!!!");

do{
    intento = parseInt(prompt("Intento " + i));
    i++;
}while(intento != numero);

alert("Acertaste! El numero era " + numero);