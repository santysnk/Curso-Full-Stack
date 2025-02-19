import * as rs from "readline-sync";

export function obtenerPuntaje(criterio:string):number{
    const opciones = ["1","2","3","4","5"];
    const index = rs.keyInSelect(opciones, `Introduce el puntaje de ${criterio}: `);
    return Number(opciones[index]);
}