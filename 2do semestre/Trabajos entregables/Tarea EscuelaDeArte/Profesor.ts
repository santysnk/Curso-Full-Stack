import { Persona } from "./Persona";

export class Profesor extends Persona{
    private especialidad:string; // para determinar la materia que cubre

    constructor(pNombre:string,pApellido:string,pDNI:number,pEdad:number,pEspecialidad:string) {
        super(pNombre, pApellido, pDNI,pEdad);
        this.especialidad = pEspecialidad;
    }

    public mostrarInfo():string {
        return `Profesor/a: ${super.mostrarInfo()}  
    Especialidad: ${this.especialidad}`;
    }

}