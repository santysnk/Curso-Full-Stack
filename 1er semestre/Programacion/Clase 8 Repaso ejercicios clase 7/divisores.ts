import * as rs from "readline-sync";

/*
Métodos: Ejercicio "Divisores"

Implemente un método llamado cantidadDeDivisores que reciba un número entero y devuelva la cantidad de divisores:
  • Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8,16, por lo que la respuesta debería ser 5.
  • Re-utilice el método esMultiplo implementado para el ejercicio anterior.
*/

console.clear();
console.log(" DIVISORES");
console.log("-----------");

const userInput: number = rs.questionInt("\ningrese un numero para obtener la cantidad de divisores: ");
let contador:number = 0;
let esMultiplo = (dividendo: number, divisor: number): boolean => {
    return dividendo % divisor === 0;
};

for (let i:number = 1; i <= userInput;i++){
    if(esMultiplo(userInput,i)){
        contador++;
    }
}

console.log("---------------------------------------------------");
console.log(`El numero ${userInput}, tiene ${contador} divisores`);