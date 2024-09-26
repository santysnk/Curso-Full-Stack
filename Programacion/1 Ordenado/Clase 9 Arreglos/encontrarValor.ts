
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

let numArray: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
let mayor:number = 0;

function esPar (){

}


// Encontrar el número mayor
for (let i:number = 0; i < numArray.length;i++){
    if (mayor < numArray[i]){
        mayor = numArray[i];
    }
}
console.log(`\nEl numero mayor en el array es: ${mayor}`);

/* Tambien podemos usar el siguiente metodo
    array.forEach((elemento, indice, array) => {
    });
*/
console.log("Encontrar el elemento más grande del arreglo (forEach)");
console.log("--------------------------------------------");
let sum2:number=0;

numArray.forEach ((n) => {
    if (n > sum2){sum2 = n;
    }  
});

