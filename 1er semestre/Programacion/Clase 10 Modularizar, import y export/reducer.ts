/*
Estructuras de Datos – Arreglos: Ejercicio – Suma Elementos Arreglo

    • Construya un algoritmo que sume todos los elementos de un arreglo de tamaño N
    • La dimensión del arreglo es ingresada por el usuario
    • Los elementos (números) del arreglo son ingresados por el usuario
*/
import * as rs from "readline-sync";
console.clear();

try {
    const dim:number = rs.questionInt("Enter array dimencion: ");
    const numsArr: number[] = new Array(dim);
    let sum:number = 0;
    
    for (let i = 0; i < numsArr.length; i++){
        numsArr[i] = rs.questionInt(`Enter number ${i+1} of ${dim}: `);
        sum = sum +   numsArr[i];
    }
    console.log(sum);

} catch (error: any){
    console.log(`error al crear arreglo`, error?.message);
}



