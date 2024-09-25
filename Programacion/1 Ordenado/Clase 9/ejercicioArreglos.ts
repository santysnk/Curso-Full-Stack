import * as rs from "readline-sync";
/*
Construya un algoritmo que tenga dos arreglos uno que almacene 2 nombres y otro que almacene 3 números ambos ingresados por el usuario. 
Al final debe imprimir los valores por consola
*/

let nombres: string[] = new Array(2);
let numeros: number[] = new Array(3);

for (let i:number = 0; i<3; i++){
    if (i<2){
        nombres[i]= rs.question("Ingrese un nombre: ");
    }
    numeros[i] = rs.questionInt("Ingrese un numero: ");
}

console.log("--------------------------------------");

for (let i:number = 0; i<nombres.length; i++){
    console.log(nombres[i]);
}

for (let i:number = 0; i<numeros.length; i++){
    console.log(numeros[i]);
}