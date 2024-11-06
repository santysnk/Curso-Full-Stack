import * as rs from "readline-sync";

/*
const matrixNums:number [][] = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
]

for (let i:number = 0;i < matrixNums.length;i++){
    for (let j:number = 0; j < matrixNums[i].length;j++){
        console.log(matrixNums[i][j]);
    }
}

tomando este codigo como base, escriba un algoritmo que permita al usuario
reemplazar todos los ceros de forma secuencial por el numero de su preferencia
desafio extra: mostrar los numeros ingresados por el usuario
*/

const matrixNums: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrixNums.length; i++) {
    console.log("Bucle externo, iteracion #" + (i + 1));
    console.log("--------------------------");
    for (let j = 0; j < matrixNums[i].length; j++) {
        console.log("Bucle interno, iteracion #" + (j + 1));
        console.log("--------------------------");
    }
}

console.log(matrixNums[1][1]);

// Definicion de una matriz de 5x5 sin iniciallizar 
//Esta es una forma explícita de crear una matriz de 5x5. 
const matriz: number[][] = new Array(
    new Array(5), 
    new Array(5), 
    new Array(5), 
    new Array(5), 
    new Array(5)
    );

//  puede simplificarse si queremos evitar escribir cada fila manualmente. Aquí te dejo una forma más compacta:

//  Opción simplificada (creando todas las filas con un bucle implícito):

const matriz2: number[][] = new Array(5).fill(undefined).map(() => new Array(5));

/*
El método .map() en un array es utilizado para crear un nuevo array aplicando una función a cada elemento del array original.
No modifica el array original, sino que devuelve un nuevo array en el que cada elemento es el resultado de aplicar la función provista.

Sintaxis básica:

const nuevoArray = arrayOriginal.map((elemento, indice, array) => {
    // función que transforma cada elemento
    return nuevoElemento;
});

Parámetros de .map():
    * elemento: El valor del elemento actual en el array que está siendo procesado.
    * índice (opcional): El índice del elemento actual que está siendo procesado.
    * array (opcional): El array original sobre el cual se está aplicando .map().
    
Ejemplo:
Supongamos que tienes un array de números y quieres crear un nuevo array con el doble de cada número:   */

const numeros = [1, 2, 3, 4];
const dobles = numeros.map(num => num * 2);

console.log(dobles); // [2, 4, 6, 8]






// Opción 2: Alternativa más compacta sin fill (también genera undefined)
const matriz3: number[][] = Array.from({ length: 5 }, () => new Array(5));

