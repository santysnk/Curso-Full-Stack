import * as rs from "readline-sync";

let numeros: number[] = new Array(5);

for (let i:number = 0; i<numeros.length; i++){
    numeros[i]= rs.questionInt("Ingrese un numero: ");
}

for (let i:number = 0; i<numeros.length; i++){
    console.log(numeros[i]);
}

