import * as rs from "readline-sync";

import { obtenerPuntaje } from "./obtenerPuntaje";
import { calcularPuntaje } from "./calcularPuntaje";

export function determinarGanador():void{
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