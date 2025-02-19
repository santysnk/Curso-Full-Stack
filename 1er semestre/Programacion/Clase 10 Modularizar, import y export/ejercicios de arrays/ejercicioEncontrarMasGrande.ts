
/*
Estructuras de Datos

Encontrar el elemento más grande del arreglo

Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]:

    - Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola.
    - Almacenar el número más grande en una variable global y pasarlo a una función para determinar si el
    número es par o impar.
*/

console.clear()
console.log("Encontrar el elemento más grande del arreglo");
console.log("--------------------------------------------");

let arrayDeNumeros: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
let mayor:number = 0;


function buscarParOImpar(numero: number): void {
    // Función para determinar si es par o impar
    if (numero % 2 === 0) {
        console.log(`El número ${numero} es par.`);
    } else {
        console.log(`El número ${numero} es impar.`);
    }
}


// Encontrar el número mayor
for (let i:number = 0; i < arrayDeNumeros.length;i++){
    if (mayor < arrayDeNumeros[i]){
        mayor = arrayDeNumeros[i];
    }
}
console.log(`\nEl numero mayor en el array es: ${mayor}`);
buscarParOImpar(mayor);

/* Tambien podemos usar el siguiente metodo
    array.forEach((elemento, indice, array) => {
    });
*/

console.log("\nEncontrar el elemento más grande del arreglo (forEach)");
console.log("--------------------------------------------");


arrayDeNumeros.forEach ((n) => {
    if (n > mayor){
        mayor = n;
    }  
});

console.log(`\nEl numero mayor en el array es (forEach): ${mayor}`);
buscarParOImpar(mayor);