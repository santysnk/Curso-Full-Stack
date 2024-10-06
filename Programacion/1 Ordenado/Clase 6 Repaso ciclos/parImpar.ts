import * as rs from "readline-sync";
/*
Estructuras de Control: Par/Impar

    • Realizar un algoritmo que dado un número entero ingresado por el usuario, visualice en pantalla si es par o impar.
    • En el caso de ingresar un cero, se debe volver a pedir el número por teclado (hasta que se ingrese un número mayor que cero).

    Para salir debe ingresar -1 (opcional)
*/
console.clear();
let userInput:number | null = null

while(userInput !== -1){
    userInput = rs.questionInt("Ingrese un numero para averiguar si es par o impar, (-1 para Salir): ");
    if(userInput % 2 == 0 && userInput !== -1){
        console.log(`El numero ingresado (${userInput}), es par. \n`);
    }else if(userInput !== -1){
        console.log(`El numero ingresado (${userInput}), es impar. \n`);
    }
}
