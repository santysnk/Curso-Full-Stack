
import * as rs from 'readline-sync'

console.clear();

let i: number;
let linea: string ;
let numero1: number = rs.questionInt("ingrese el primer valor :");
let numero2: number = rs.questionInt("ingrese el segundo valor :");
let opcionMenu: number = rs.questionInt("ingrese 1 para sumar, 2 para restar, cualquier otro numero para salir :");



if (opcionMenu==1){
    separador(30);
    console.log(`El resultado es: ${numero1 + numero2}`);
    separador(50);
    
}else if (opcionMenu==2){
    separador(10);
    console.log(`El resultado es: ${numero1 - numero2}`);
    separador(20);
}


function separador(cantidad:number): void {
    linea="";
    for (i=1;i<cantidad;i++){
        linea = linea + "-";
    }
    console.log(linea);
}
