import * as fs from 'readline-sync'

/* Realizar un algoritmo que dado un número entero ingresado por el usuario, visualice en pantalla si es par o impar
   
   • En el caso de ingresar un cero, se debe volver a pedir el número por teclado 
   (hasta que se ingrese un número mayor que cero) 
   
   • Para salir debe ingresar un valor negativo
*/

console.clear();
console.log("************************************");

let entrada: number | null = null;



while (entrada !== 0) {

    entrada = fs.questionInt("Ingrese un numero: ");
    if (entrada > 0) {
        console.log("\nNumero ingresado: ",entrada);
    }else if (entrada === 0){
        console.log("\nIngrese un valor mayor a 0");
    }
    
}

console.log("\nHa ingresado un numero negativo para finalizar: ",entrada);




