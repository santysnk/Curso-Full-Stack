import * as rs from "readline-sync";

/*
    Ejercicio: Área del Rectángulo

    • Leemos la base y la altura desde el teclado y
    las guardamos en las variables
*/

console.clear()
console.log("  CALCULO DE AREA DE UN RECTANGULO  ");
console.log("-------------------------------------");
let base : number = rs.questionInt("Ingrese la base: ");
let altura : number = rs.questionInt("Ingrese la altura: ");
let area : number = base * altura;
console.log("-------------------------------------");
console.log("");
console.log(`El Area es: ${area}`);
