import * as rs from "readline-sync";
import { cargarArreglo } from "./help";
/*
Estructuras de Datos y Métodos: Promedio Escolar

• Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres.
• Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno (ingresado por el usuario).
• Luego de resolverlo, pensar en aprovechar métodos y discutir cómo representar la información.
*/
console.clear()
console.log(" Promedio Escolar");
console.log("-------------------");

const cantAlumnos: number = rs.questionInt("ingrese la cantidad de alumnos a guardar en los arreglos: ");

let arrayAlumnos:number[] = new Array(cantAlumnos);
console.log("");
arrayAlumnos = cargarArreglo(arrayAlumnos,cantAlumnos);

//console.log(arrayAlumnos);
let numMenu:number = rs.questionInt("ingrese el numero del alumno para ver su promedio (0 para salir): ");

while (numMenu != 0){
    console.log("\nConsulta de Promedio Escolar");
    console.log("----------------------------");
    console.log(`El promedio del alumno n° ${numMenu}, es: ${arrayAlumnos[numMenu-1]}\n`);
    numMenu = rs.questionInt("ingrese el numero del alumno para ver su promedio (0 para salir): ");
}