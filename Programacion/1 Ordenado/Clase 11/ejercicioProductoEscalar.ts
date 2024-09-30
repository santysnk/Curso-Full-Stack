import * as rs from "readline-sync";
import { cargarArreglo } from "./funciones";
import { productoEscalar } from "./funciones";
/*
Estructuras de Datos: Producto Escalar

    • Cargue dos arreglos de dimensión N números (la cantidad es ingresada por el usuario).

    • Calcule el producto escalar entre los dos arreglos.
*/

console.clear()
console.log(" PRODUCTO ESCALAR");
console.log("-------------------");

let cantNum: number = rs.questionInt("ingrese la cantidad de numeros a guardar en los arreglos: ");
console.log("");
let array1:number[] = new Array(cantNum);
let array2:number[] = new Array(cantNum);
const nombreArreglo1:string ="array1";
const nombreArreglo2:string ="array2";

cargarArreglo(array1,nombreArreglo1,cantNum);
console.log("");
cargarArreglo(array2,nombreArreglo2,cantNum);
productoEscalar(array1,array2,cantNum);


