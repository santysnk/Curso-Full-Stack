import { Estudiante } from "./ClaseEstudiante"

export class Profesor {
    private nombreProfesor:string
    private listaAlumnos:Estudiante[]

    constructor (PProfesor:string){
        this.nombreProfesor = PProfesor;
    }

    public agregarEstudiante (alumno:Estudiante){
        this.listaAlumnos.push(alumno);
    }

    getnombreProfesor():string{
        return this.nombreProfesor;
    }

    setnombreProfesor(PnombreProfesor:string){
        PnombreProfesor = this.nombreProfesor;
    }



}