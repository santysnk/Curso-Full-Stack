import { CalseHabitacional } from "./ClaseHabitacional";

export class Carpa extends CalseHabitacional {

    constructor (pDimesion:string,pHabitaciones:number){
        super(pDimesion,pHabitaciones);
    }

    infoTamaño(){
        console.log("El tamaño recomendado es chico");
        
    }

}