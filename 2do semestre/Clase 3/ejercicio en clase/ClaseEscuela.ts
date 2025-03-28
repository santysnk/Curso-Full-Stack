import { Estudiante } from "./ClaseEstudiante"
import { Profesor } from "./ClaseProfesor"

class Escuela{
    private alumnosInscriptos:Estudiante[];
    private profesorContratado:Profesor[];

    public matricularEstudiante (alumno:Estudiante){
        this.alumnosInscriptos.push(alumno);
    }

    public contratarPersonal (persona:Profesor){
        this.profesorContratado.push(persona);
    }

    public expulsarAlumno (nameAlumno:string){
        const cantAlumnos:number = this.alumnosInscriptos.length
        for (let i:number = 0; i < cantAlumnos; i++){
            if (nameAlumno == this.alumnosInscriptos[i].getNombre()){
                this.alumnosInscriptos.splice(i,1);
            }
        }
    }

    public expulsarPersonal (nameProfesor:string){
        const cantProfesores:number = this.profesorContratado.length
        for (let i:number = 0; i < cantProfesores; i++){
            if (nameProfesor == this.profesorContratado[i].getnombreProfesor()){
                this.profesorContratado.splice(i,1);
            }
        }
    }

}