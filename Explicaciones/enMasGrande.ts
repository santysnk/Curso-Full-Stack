/*
    HACER UN ARREGLOS QUE ALMACENE NUMEROS, IMPRIMIR POR CONSOLA EL NUMERO MAS GRANDE

*/

let numeros2:number[] = [20,35,58,70,49,90,3];

let numMayor:number = 0;

for (let i = 0; i < numeros2.length ; i++){
    if (numMayor < numeros2[i] ){
        numMayor = numeros2[i];
    }
}

console.log(numMayor);
