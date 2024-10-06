import * as rs from "readline-sync";
/*
Estructuras de Control: Tablas de Multiplicación

    • Diseñar un algoritmo que muestre por pantalla la tabla de multiplicación del número ingresado por el usuario.
    • Para definir hasta qué número desea que muestre la tabla de multiplicación, el usuario también deberá ingresar dicho valor.
*/

console.clear();


const multiplicando: number = rs.questionInt("Ingrese multiplicando: ");
const limite: number = rs.questionInt("Iniciando el limite de la tabla: ");
let accum:number = 0;
for (let i = 1; i <= limite;i++){
    accum = multiplicando * i;
    console.log(`${i}) ${multiplicando} x ${i} = ${accum}`);
}
