import * as rs from "readline-sync";

/*
Estructuras de Datos – Arreglos

Ejercicio – Nombres Deseados

• Construya un algoritmo que tenga un arreglo
de dimensión deseada por el usuario y llénelo
con los nombres que el usuario desee

• Crear un arreglo de las posiciones que desee
el usuario y llenarlo con nombres de personas

*/

console.clear();
console.log(" NOMBRES DESEADOS");
console.log("---------------------");

let cantNombre: number = rs.questionInt("ingrese la cantidad de nombres a guardar: ");
let nombres:string[] = new Array(cantNombre);
function mostrarNombres (listaNombres:string[]):void{
    console.log("\nNombres ingresados");
    console.log("------------------");
    for (let i :number = 0; i < listaNombres.length;i++){
        console.log(`El nombre ${i + 1} es: ${listaNombres[i]}`);
    }

}

for (let i :number = 0; i < cantNombre;i++){
    nombres[i] = rs.question(`Ingrese el nombre ${i + 1} de ${cantNombre}: `);
}

mostrarNombres(nombres);