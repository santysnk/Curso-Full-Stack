import * as rs from "readline-sync";

/*
    Ejercicio: Suma de Dos Números
*/

console.clear()

console.log("-------------------------------------");
let num1 : number = rs.questionInt("Ingrese el primer numero: ");
let num2 : number = rs.questionInt("Ingrese el segundo numero: ");
console.log("-------------------------------------");
console.log("");
console.log(`El resultado de la suma es: ${num1+num2}`);
