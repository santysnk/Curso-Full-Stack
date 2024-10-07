import * as rs from "readline-sync";
/*
Estructuras de Control: Suma entre Números

    • Escriba un programa que pida al usuario dos números enteros, y luego retorne la suma de todos los números que están entre ellos.
    • Por ejemplo, si los números son 2 y 7, debe entregar como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27.
*/

console.clear();
const initNumber: number = rs.questionInt("Initial number: ");
const endNumber: number = rs.questionInt("End number: ");
let accum:number = 0;
for (let i = initNumber; i < endNumber;i++){
    accum = accum + i;
}
console.log(accum);