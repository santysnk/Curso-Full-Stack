import * as rs from "readline-sync";

/*
Estructuras de Datos : Crear arreglo
    1) Crear un arreglo de letras e imprimirlo.
    2) Dado un array con nombres de tamaño 5, pedir al usuario que ingrese un nombre y verificar si está
    en el arreglo. Imprimir el arreglo y si está o no en él.
*/

console.clear()
console.log(" Arreglo de letras e imprimirlo.");
console.log("---------------------------------");


let nombresArray:string[] = new Array(5);
let encontrado:boolean = false;
nombresArray[0]="marcos";
nombresArray[1]="luciana";
nombresArray[2]="andres";
nombresArray[3]="dario";
nombresArray[4]="marcela";

let nombreABuscar:string = rs.question("Ingrese un nombre a buscar en el arreglo: ");
let pos:number = 0;

for (let i:number = 0; i < nombresArray.length ; i++){
    if (nombresArray[i] === nombreABuscar){
        encontrado=true;
        pos=i;
    }
}

if (encontrado){
    console.log("\n***************************************************************");
    console.log(`El nombre ingresado "${nombreABuscar}" se encuentra en el array, posicion: ${pos}`);
}else{
    console.log("\n***************************************************************");
    console.log(`El nombre ingresado "${nombreABuscar}" no encuentra en el array.`);
}