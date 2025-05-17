import { Persona } from "./Persona";

export class Estudiante extends Persona {
    private estadoAsist:string; // para determinar si es: Regular o No Regular

    constructor(pNombre:string, pApellido:string, pDNI:number, pEdad:number, pEstadoAsist:string) {
        super(pNombre, pApellido, pDNI,pEdad);
        this.estadoAsist = pEstadoAsist;
    }

    public mostrarInfo():string {
        return `Estudiante: ${super.mostrarInfo()}  
    Estado de asistencia: ${this.estadoAsist}`;
    }
}    