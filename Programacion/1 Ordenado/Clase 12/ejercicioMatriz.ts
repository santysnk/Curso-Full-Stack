import * as rs from "readline-sync";


//tomando este codigo como base, escriba un algoritmo que permita al usuario
//reemplazar todos los ceros de forma secuencial por el numero de su preferencia



let matrixNums:number [][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

for (let i:number = 0;i < matrixNums.length;i++){
    for (let j:number = 0; j < matrixNums[i].length;j++){
        matrixNums[i][j]= rs.questionInt(`Ingrese valor, para la columna ${i}, fila ${j}: `);
    }
}

console.log("\nLos numeros ingresados por el usuario son");
console.log("-----------------------------------------");

for (let i:number = 0;i < matrixNums.length;i++){
    for (let j:number = 0; j < matrixNums[i].length;j++){
        console.log(matrixNums[i][j]);
    }
}