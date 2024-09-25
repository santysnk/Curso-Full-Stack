import * as rs from 'readline-sync'

console.clear();

let numero1: number = rs.questionInt("ingrese el primer valor :");
let numero2: number = rs.questionInt("ingrese el segundo valor :");
let opcionMenu: number = rs.questionInt("ingrese 1 para sumar, 2 para restar, cualquier otro numero para salir :");


let calcularResultado = (num1 : number, num2: number, opcion:number) : number => {
    let resultado : number = 0;
    if (opcion==1){
        resultado = num1 + num2;
    }else if (opcion==2){
        resultado = num1 - num2;
    } 

    return resultado
}

let total1 : number = calcularResultado(50,20,1);
let total2 : number = calcularResultado(50,20,2);

let totalDelUsuario = calcularResultado(numero1,numero2,opcionMenu)

console.log(total1,total2);
console.log(totalDelUsuario);
