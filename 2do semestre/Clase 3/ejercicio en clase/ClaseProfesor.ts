import { Estudiante } from "./ClaseEstudiante"

export class Profesor {
    private nombreProfesor:string;
    private listaAlumDeProfesor:Estudiante[]=[];

    constructor (PProfesor:string){
        this.nombreProfesor = PProfesor;
    }

    public agregarEstudiante (alumno:Estudiante){
        this.listaAlumDeProfesor.push(alumno);
    }

    public getnombreProfesor():string{
        return this.nombreProfesor;
    }

    public getListaAlumnos(): Estudiante[] {
        return this.listaAlumDeProfesor;
    }

    //método para eliminar un alumno de la lista
    public eliminarEstudiante(index: number) {
        if (index >= 0 && index < this.listaAlumDeProfesor.length) {
            this.listaAlumDeProfesor.splice(index, 1);
        }
    }
    
}