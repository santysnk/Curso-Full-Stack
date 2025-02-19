import * as rs from "readline-sync";
const userAge:number = rs.questionInt("Ingrese su edad: ");  //Usamos rs.questionInt("mensaje"), para almacenar un numero ingresado por usuario por consola
console.log("\n User is " + userAge + "years old.");

const userName:string = rs.question("Ingrese su nombre: ");  //Usamos rs.question("mensaje"), para almacenar un string ingresado por usuario por consola
console.log("\n User name is: " + userName);