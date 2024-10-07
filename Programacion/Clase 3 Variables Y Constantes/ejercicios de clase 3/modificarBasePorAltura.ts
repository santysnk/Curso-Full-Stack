import * as rs from "readline-sync";

/*
    Modificar el ejemplo de base por altura
    • Almacenar la base, la altura y el resultado en variables y que el funcionamiento del script sea el mismo
*/

console.clear()

let altura: number; //variable que almacena el valor de la altura del rectangulo
let base: number; //variable que almacena el valor de base de rectangulo

console.log("");
console.log("CALCULO DE AREA DE UN RECTANGULO");
console.log("--------------------------------");
console.log("");

// Leer el valor de la altura desde la consola
altura = rs.questionInt("Ingrese el valor de altura: ");
console.log("");

// Leer el valor de la base desde la consola
base = rs.questionInt("Ingrese el valor de la base: ");
console.log("");
console.log("--------------------------------");

// Calcular el área del rectángulo
let area: number = base * altura;

console.log(`El área del rectángulo es: `, area);
