import * as rs from "readline-sync";

/*
Métodos: Ejercicio "Múltiplos"

Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico verdadero o falso según si el primer número que
se indique como parámetro es múltiplo del segundo:
  • Recuerde que un numero es múltiplo de otro si al dividirlo su resto es cero.
  • Recuerde que la operación mod permite saber si el resto de una división es cero.
*/

console.clear();
console.log(" MULTIPLOS");
console.log("-----------");

let ingreso1: number = rs.questionInt("\ningrese primer valor: ");
let ingreso2: number = rs.questionInt("\ningrese segundo valor: ");

let esMultiplo = (num1: number, num2: number): boolean => {
  return num1 % num2 === 0;
};

if (esMultiplo(ingreso1, ingreso2)) {
  console.log("--------------");
  console.log("Es multiplo");
} else {
  console.log("--------------");
  console.log("No es multiplo");
}


