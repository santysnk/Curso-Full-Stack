import * as rs from "readline-sync";
/*
¡Gran Concurso de Tortas de Tres Arroyos! :birthday:
Te toca ser jurado de un concurso de tortas, y el número de participantes puede variar. 
Tu tarea es pedir al usuario cuántos concursantes habrá y luego solicitar las puntuaciones de Sabor, Presentación y Dificultad para cada torta. 
Al final, debes determinar qué torta tiene el mayor puntaje. 

Y si hay empate? 🤔 En ese caso, informaremos que se produjo un empate 
(no es necesario indicar si fueron dos o mas empates ni entre que tortas es el empate, solo basta con indicar que se produjo empate si al menos existe uno).

## Funciones a implementar:
    *calcularPuntaje(sabor, presentacion, dificultad):
        Recibe tres números entre 1 y 5 que representan las puntuaciones de una torta y devuelve la suma de esos números (el puntaje total del pastel).

    *determinarGanador():
        Utiliza la librería readline-sync para pedir al usuario el número de participantes, luego solicite las puntuaciones de cada uno de ellos y 
        usa la funcion calcularPuntaje para determinar la torta con el mayor puntaje

Si lo consideran necesario, pueden implementar funciones estra. */
console.clear();

function obtenerPuntaje(criterio:string):number{
    const opciones = ["1","2","3","4","5"];
    const index = rs.keyInSelect(opciones, `Introduce el puntaje de ${criterio}: `);
    return Number(opciones[index]);
}

function calcularPuntaje (s:number, p:number, d:number):number{
    return (s + p + d) / 3;
}

function determinarGanador():void{
    let mayorPuntaje: number = 0;
    let ganador: number = 0;
    let esEmpate: boolean = false; 
    const cantidadConcursantes = rs.questionInt(`"Cuantas tortas participan del concurso?: "`);

    for (let i = 0; i < cantidadConcursantes; i++){
        console.log(`Evaluando torta #${i+1}`);
        const sabor = obtenerPuntaje("sabor");
        const presentacion = obtenerPuntaje("presentacion");
        const dificultad = obtenerPuntaje("dificultad");
        const puntajeTotal = calcularPuntaje(sabor,presentacion,dificultad);
        console.log(`El puntaje total de la torta #${i+1} es: ${puntajeTotal}`);
        
        if (puntajeTotal > mayorPuntaje){
            mayorPuntaje = puntajeTotal;
            ganador = i;
            esEmpate = false;
        }else if (puntajeTotal === mayorPuntaje){
            esEmpate = true;
        }
    }

    if (esEmpate){
        console.log(`Hay empate, se necesita comer mas tortas para determinar ganador`);
    }else {
        console.log(`La torta ganadora es la #${ganador+1} con un puntaje de ${mayorPuntaje}`);
    }
}

determinarGanador();



