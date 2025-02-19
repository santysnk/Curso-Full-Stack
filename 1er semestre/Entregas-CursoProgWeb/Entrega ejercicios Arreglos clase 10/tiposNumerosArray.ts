import * as rs from "readline-sync";

/*
Estructuras de Datos: Tipos de Números en Arreglo

    • Almacene en un arreglo de dimensión N números (la cantidad es ingresada por el usuario)
    • Muestre cuántos números son positivos, cuántos son negativos y cuántos ceros hay.
*/

console.clear()
console.log(" Tipos de Números en Arreglo");
console.log("----------------------------");


let tamArray:number = rs.questionInt("Ingrese cuantos numeros almacenara el array: ");
let numArray:number[] = new Array(tamArray);
let numPositivos:number=0;
let numNegativos:number=0;
let ceros:number=0;

const long:number = numArray.length;

//for para cargar por consola los elementos del array
for (let i:number = 0; i<long; i++){
    numArray[i]= rs.questionInt(`Ingrese valor, ${i+1} de ${long}: `)
}

//for para determinar cuantos elementos en el arry son positivos, cuantos negativos y cuantos ceros hay.
for (let i:number = 0; i < long;i++){
    if(numArray[i] > 0){
        numPositivos++;
    }else if (numArray[i] < 0){
        numNegativos++;
    }else if(numArray[i] === 0){
        ceros++;
    }
}
console.log("--------------------------------------------------------------------------");
console.log(`se almacenaron ${numPositivos} numeros positivos, ${numNegativos} numeros negativos y ${ceros} ceros.`);

