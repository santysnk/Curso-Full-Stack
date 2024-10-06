import * as fs from 'readline-sync'

/* para sacar el promedio de notas */
console.clear()
console.log("***********************************");
let nota: number;
let promedio : number;
let contador : number = 1;
let sumaNota : number = 0;


// *********  USANDO WHILE  **********************************

// while (contador <= 10){
//    nota = fs.questionInt(" Ingrese su nota: ");
//    sumaNota = sumaNota + nota;
//    contador ++;
// }

// promedio = sumaNota / 10;

// console.log("---------------------------------------");
// console.log("\n El promedio de las notas es:",promedio);

//**********************************************************


// *********  USANDO FOR  **********************************

for (contador = 1; contador <= 10; contador++){
    nota = fs.questionInt(contador + ") Ingrese su nota: ");
    sumaNota = sumaNota + nota;
}

promedio = sumaNota / (contador-1);

console.log("---------------------------------------");
console.log("\n El promedio de las notas es:",promedio);

//**********************************************************