import * as rs from "readline-sync";

let dimencion:number = rs.questionInt("Que dimencion quiere para el arreglo: ");
let nombresDeseados: number[] = new Array(dimencion);

for (let i:number = 0; i<nombresDeseados.length; i++){
    nombresDeseados[i]= rs.questionInt("Ingrese un numero: ");
}

for (let i:number = 0; i<nombresDeseados.length; i++){
    console.log(nombresDeseados[i]);
}

