//declarar una variable
let valor1 : number; // de valor undefined

//declarar dos variables e inicializarlas (darles el primer valor)
let numero1 : number = 3;
let numero2 : number = 5;

//declarar una variable e inizializarla con el valor resultante de la suma de dos variables 
let resultado : number = numero1 + numero2;

//mostrar el valor de la variable resultado por consola
console.log(resultado);

//declarar una variable "mensaje" e inizializarla con un mensaje "El resultado de la suma es;" mas el valor de la variable resultado 
let mensaje: string = "El resultado de la suma es;" + resultado;

//mostrar el valor de la variable mensaje por consola
console.log(mensaje);

//reasignar variable numero1 con el valor 7 y variable numero2 con el valor 10 y reasignar el valor de la suma a la variable resultado
numero1 = 7;
numero2= 10;
resultado = numero1 + numero2;

//mostrar el valor de la variable resultado por consola
console.log(mensaje);