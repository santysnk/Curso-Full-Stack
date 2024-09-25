import * as rs from "readline-sync";

/*
Estructuras de Datos – Arreglos

Ejercicio – Suma Elementos Arreglo

    • Construya un algoritmo que sume todos los
    elementos de un arreglo de tamaño N

    • La dimensión del arreglo es ingresada por el
    usuario
    • Los elementos (números) del arreglo son
    ingresados por el usuario

*/

console.clear()
console.log(" Suma Elementos Arreglo");
console.log("------------------------");

let cantNum: number = rs.questionInt("ingrese la cantidad de numeros a guardar: ");
let num:number[] = new Array(cantNum);
let sumTotal:number=0;

function sumarArray(arrayNum:number[]):number{
    let suma:number=0;
    for (let i:number=0; i < arrayNum.length; i++){
        suma = suma + arrayNum[i];
    }
    return suma    
}

for (let i :number = 0; i < num.length;i++){
    num[i] = rs.questionInt(`Ingrese el numero ${i + 1} de ${num.length}: `);
}

sumTotal = sumarArray(num);
console.log("\n-------------------------------");
console.log(`La suma de los numeros en el arreglo es: ${sumTotal}`);
    
