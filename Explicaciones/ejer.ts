
/*
Construya un algoritmo que tenga dos arreglos:

    uno que almacene 2 nombres 
    y otro que almacene 3 números ambos ingresados por el usuario. 

Al final debe imprimir los valores por consola
*/

import * as rs from "readline-sync";

console.clear();

let nombres:string[] = new Array(2);
let numeros:number[] = new Array(3);

numeros[0] = rs.questionInt("Ingrese numero1: ");
numeros[1] = rs.questionInt("Ingrese numero2: ");
numeros[2] = rs.questionInt("Ingrese numero3: ");

nombres[0] = rs.question("Ingrese nombre1: ");
nombres[1] = rs.question("Ingrese nombre2: ");

for (let i = 0 ; i < nombres.length ; i++ ){
    console.log(nombres[i]);
}

for (let i = 0 ; i < numeros.length ; i++ ){
    console.log(numeros[i]);
}



