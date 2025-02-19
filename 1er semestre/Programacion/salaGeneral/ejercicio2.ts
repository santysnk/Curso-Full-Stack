
// -------------------------------------------------------------------
// Crea un nuevo array que contenga solo los números mayores a 10.
// Suma todos los números en el array y muestra el resultado.

const numeros = [2, 5, 8, 12, 19, 23, 7, 15];

// 1. Crea un nuevo array que contenga solo los números mayores a 10
const numerosMayoresA10 = numeros.filter(numero => numero > 10);
console.log(numerosMayoresA10);

// 2. Suma todos los números en el array y muestra el resultado
const sumaTotal = numeros.reduce((total, numero) => total + numero, 0);
console.log(sumaTotal);