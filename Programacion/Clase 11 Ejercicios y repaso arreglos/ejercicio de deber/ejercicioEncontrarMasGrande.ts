/*
Estructuras de Datos: Encontrar el elemento más grande del arreglo.

Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]:

    - Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola.
    - Almacenar el número más grande en una variable global y pasarlo a una función para determinar si el
    número es par o impar.
*/

console.clear()
console.log("Encontrar el elemento más grande del arreglo");
console.log("--------------------------------------------");

let arrayDeNum: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
let mayorNum:number = 0;

// Función para determinar si es par o impar
function esParOImpar(numero: number): void {
    if (numero % 2 === 0) {
        console.log(`El número ${numero} es par.`);
    } else {
        console.log(`El número ${numero} es impar.`);
    }
}

// Encontrar el número mayor
for (let i:number = 0; i < arrayDeNum.length;i++){
    if (mayorNum < arrayDeNum[i]){
        mayorNum = arrayDeNum[i];
    }
}
console.log(`\nEl numero mayor en el array es: ${mayorNum}`);
esParOImpar(mayorNum);

/* Tambien podemos usar el siguiente metodo
    array.forEach((elemento, indice, array) => {
    });
*/

console.log("\nEncontrar el elemento más grande del arreglo (forEach)");
console.log("--------------------------------------------------------");


arrayDeNum.forEach ((n) => {
    if (n > mayorNum){
        mayorNum = n;
    }  
});

console.log(`\nEl numero mayor en el array es (forEach): ${mayorNum}`);
esParOImpar(mayorNum);