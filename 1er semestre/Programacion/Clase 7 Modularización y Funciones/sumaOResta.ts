import * as rs from 'readline-sync'
console.clear();
let i:number;
let linea : string;
let numero1 :number = rs.questionInt ("Ingrese el primer valor: ");
let numero2:number = rs.questionInt ("\nIngrese el segundo valor: ");
let opcionMenu: number = rs.questionInt("\nIngrese 1  si quiere sumar o 2 si quiere restar: ");

if(opcionMenu == 1){
    linea = "";
    for(i=0;i<=40;i++){
        linea = linea + "-";
    }
    console.log(linea);
    console.log(`el resultado es ${numero1 + numero2}`);
    console.log(linea);
}else if (opcionMenu == 2){
    linea = "";
    for(i=0;i<=40;i++){
        linea = linea + "-";
    }
    console.log(linea);
    console.log(`el resultado es ${numero1 - numero2}`);
    console.log(linea);
}