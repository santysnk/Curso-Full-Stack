import { Estudiante } from "./ClaseEstudiante"

export class Profesor {
    private nombreProfesor:string;   // Nombre del profesor.
    private listaAlumDeProfesor:Estudiante[]=[];   // Lista de alumnos asignados a este profesor.

    // Constructor para inicializar un profesor.
    constructor (PProfesor:string){
        this.nombreProfesor = PProfesor;
    }

    // Retorna el nombre del profesor.    
    public getnombreProfesor():string{
        return this.nombreProfesor;
    }

    // Retorna la lista de estudiantes asignados al profesor.
    public getListaAlumnos(): Estudiante[] {
        return this.listaAlumDeProfesor;
    }

    // Agrega un estudiante a la lista del profesor.
    // parametro "alumno": Estudiante a agregar.
    public agregarEstudiante (alumno:Estudiante){
    this.listaAlumDeProfesor.push(alumno);
}

    //método para eliminar un alumno de la lista según el índice.
    public eliminarEstudiante(index: number) {
        if (index >= 0 && index < this.listaAlumDeProfesor.length) {
            this.listaAlumDeProfesor.splice(index, 1);
        }
    }
    
}