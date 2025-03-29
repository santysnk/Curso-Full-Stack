import { Estudiante } from "./ClaseEstudiante"
import { Profesor } from "./ClaseProfesor"
import * as rs from "readline-sync";

export class Escuela{
    private alumnosInscriptos:Estudiante[]=[];
    private profesorContratado:Profesor[]=[];

    setEstudianteNuevo (alumno:string, nota:number){
        let pausa:string|null = null;
        const nuevoAlumno:Estudiante = new Estudiante(alumno,nota);
        this.alumnosInscriptos.push(nuevoAlumno);
        console.log("alumno agregado \n");
        pausa = rs.question("presione enter para continuar")
        console.clear();
    }

    getEstudiantes(){
        const cantAlumnos:number = this.alumnosInscriptos.length
        for (let i = 0 ; i < cantAlumnos ; i++){
            console.log(`Alumno ${i+1} de ${cantAlumnos}: ${this.alumnosInscriptos[i].getNombre()}`);
        }
    }

    setContratarPersonal (personaLName:string){
        let pausa:string|null = null;
        const profe:Profesor = new Profesor(personaLName)

        this.profesorContratado.push(profe);
        console.log("Profesor agregado \n");
        pausa = rs.question("presione enter para continuar")
        console.clear();
    }

    getPersonal(){
        const cantPersonal:number = this.profesorContratado.length
        for (let i = 0 ; i < cantPersonal ; i++){
            console.log(`Profesor ${i+1} de ${cantPersonal}: ${this.profesorContratado[i].getnombreProfesor()}`);
        }
    }

    public expulsarAlumno (nameAlumno:string){
        const cantAlumnos:number = this.alumnosInscriptos.length
        for (let i:number = 0; i < cantAlumnos; i++){
            if (nameAlumno == this.alumnosInscriptos[i].getNombre()){
                this.alumnosInscriptos.splice(i,1);
                console.log(`Alumno: ${nameAlumno} expulsado`);
            }else{
                console.log(`no se encontro alumno`);
            }
        }
    }

    public expulsarPersonal (numProfesor:number){
        const cantProfesores:number = this.profesorContratado.length
        for (let i:number = 0; i < cantProfesores; i++){
            if (i == numProfesor){
                this.profesorContratado.splice(i,1);
                console.log(`Profesor expulsado`);
            }else{
                console.log(`no se encontro profesor`);
            }
        }
    }

    public getCantidadProfe():number{
        return this.profesorContratado.length
    }

}