import * as rs from 'readline-sync'

/* 
Problema: Calculo del area de un triángulo
    • Se necesita un programa que permita ingresar por teclado el la base y la altura de un triángulo.
    • El programa debe retornar el area del triangulo con la base y la altura proporcionada por el usuario.
*/

console.clear()

console.log("CALCULO DE AREA DE UN TRIANGULO");
console.log("-------------------------------");
let base:number = rs.questionInt("Ingrese la base: ");
let altura:number = rs.questionInt("Ingrese la altura: ");
let area:number = base*altura/2
console.log("-------------------------------------");
console.log("");
console.log(`El Area del triangulo es: ${area}`);

