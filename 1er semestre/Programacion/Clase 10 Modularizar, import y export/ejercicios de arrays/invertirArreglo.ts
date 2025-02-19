import * as rs from "readline-sync";

/*
Estructuras de Datos

Invertir Arreglo

    • Almacene en un arreglo de tamaño N los números ingresados por el usuario.
    • La dimensión N también es ingresada por el usuario.
    • Muestre los números del arreglo pero del último al primero.
*/

console.clear()
console.log(" Invertir Arreglo");
console.log("-------------------");

let tamArray:number = rs.questionInt("Ingrese cuantos numeros almacenara el array: ");
let numArray:number[] = new Array(tamArray);

const long:number = numArray.length;

for (let i:number = 0; i<long; i++){
    numArray[i]= rs.questionInt(`Ingrese valor, ${i+1} de ${long}: `)
}

for (let i:number=long; i>=1 ; i--){
    console.log(numArray[i-1])
}