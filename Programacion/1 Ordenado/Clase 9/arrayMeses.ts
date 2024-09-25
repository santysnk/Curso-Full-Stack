import * as rs from "readline-sync";

// let arregloMes:string[] = new Array(12)

let meses: string[] = ["enero","febrero","marzo","abril","mayo","junio",
    "julio","agosto","septiembre","octubre","noviembre","diciembre"];

let nroMes : number = rs.questionInt("Ingrese numero del mes: ")

let index : number = nroMes -1;

console.log (`El mes que eligio es: ${meses[index]}`)