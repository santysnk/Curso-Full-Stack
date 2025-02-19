import * as rs from 'readline-sync'
/*
Métodos: Ejercicio "Potencias"

    • Realice un programa que devuelva la potencia de un número.
    • La base y el exponente deben ser ingresados por teclado.
    • Sólo deben admitirse exponentes mayores o iguales a cero.
    • Recuerde que el resultado de un numero elevado a 0 es 1.
    • Separe la lógica de calcular la potencia utilizando métodos.
*/

console.clear();
console.log(" CALCULO DE POTENCIA");
console.log("---------------------");

const numero:number = rs.questionInt(`\nIngrese un numero: `)
let exponente:number = rs.questionInt(`\nIngrese el exponente: `)
let result:number;

function comprobarExponente():void{
    while(exponente < 0){
        exponente = rs.questionInt(`\nel exponente debe 0 o mayor que 0, ingrese nuevamente: `);
    }
}

function obtnerPotencia(numeroA:number,exponenteA:number):number{
    let calculo:number;
    calculo = numeroA**exponenteA;
    return calculo
};

comprobarExponente();
result = obtnerPotencia(numero,exponente);

console.log("----------------------------------------------");
console.log(`La potencia de ${numero} elevado a ${exponente} es: ${result}`);


