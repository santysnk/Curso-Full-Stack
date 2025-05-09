import { CalseHabitacional } from "./ClaseHabitacional";

export class CasaRodante  extends CalseHabitacional {
    direccion:string;

    constructor (pDimesion:string,pHabitaciones:number,pDireccion:string){
        super(pDimesion,pHabitaciones);
        this.direccion = pDireccion
    }

    infoTamaño(){
        console.log("El tamaño recomendado es mediano");
        
    }

}