import * as rs from "readline-sync";

/*
Estructuras de Datos

Sumar Dos Arreglos

    • Sumar los elementos de cada una de las posiciones de dos arreglos y guardar el resultado en otro arreglo.

    • El arreglo tiene dimensión 6 y los números de los dos vectores los carga el usuario.
*/
/*
console.clear()
console.log(" Sumar Dos Arreglos");
console.log("-------------------");

let array1:number[] = new Array(6);
let array2:number[] = new Array(6);
const array1Name:string = "arreglo 1";
const array2Name:string = "arreglo 2";
const long:number = array1.length;

function llenarArreglos(arreglo:number[],nombre:string):void{
    console.log(`\nIngreso de ${long} valores, para el arreglo ${nombre}`);
    console.log("--------------------------------------------------------");

    for(let i:number = 0; i < long; i++){
        arreglo[i]= rs.questionInt(`Ingrese un valor para el ${nombre}, ${i+1} de ${long}: `) 
    }
}

function sumarArreglos(arreglo1:number[],arreglo2:number[]):void {
    console.log(`\nLa suma de las mismas posiciones de ambos arreglos es:`);
    let sumArray:number[] = new Array(long);

    for(let i:number = 0; i < long; i++){
        sumArray[i]=  arreglo1[i] + arreglo2[i]
    }
    console.log(sumArray);
}

llenarArreglos(array1,array1Name);
llenarArreglos(array2,array2Name);
sumarArreglos(array1,array2)*/
let algo:number[];
let algo1:number[]=[70,20,65,65,40];
console.log(algo1[5]);

let algo2:number[]= new Array(10);

let algo3:number[][][]

//let cosas:string[] = ["a","b","c","d"];
//cosas.push("f");

//console.log(cosas);
