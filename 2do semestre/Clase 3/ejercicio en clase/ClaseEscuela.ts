import { Estudiante } from "./ClaseEstudiante"
import { Profesor } from "./ClaseProfesor"
import * as rs from "readline-sync";

export class Escuela{
    private alumnosInscriptos:Estudiante[]=[];
    private profesorContratado:Profesor[]=[];
    private pausa:string|null = null;

    setContratarPersonal (personaLName:string){
        const nuevoProfe:Profesor = new Profesor(personaLName)

        this.profesorContratado.push(nuevoProfe);

        console.log("\n[Profesor agregado]\n");
        this.pausa = rs.question("presione enter para continuar..")
        console.clear();
    }

    setEstudianteNuevo (alumno:string, nota:number){
        const nuevoAlumno:Estudiante = new Estudiante(alumno,nota);
        
        this.alumnosInscriptos.push(nuevoAlumno);

        console.log("\n[alumno agregado]\n");
        this.pausa = rs.question("presione enter para continuar..")
        console.clear();
    }

    getListaEstudiantes(){
        return this.alumnosInscriptos
    }

    getListaProfesores(){
        return this.profesorContratado
    }

    /*
    const cantAlumnos:number = this.alumnosInscriptos.length
    for (let i = 0 ; i < cantAlumnos ; i++){
        console.log("Alumno ["+ (i+1) + "] de " + cantAlumnos + 
        ": " + this.alumnosInscriptos[i].getNombre() + 
        " Nota: " + this.alumnosInscriptos[i].getnota() +
        " (" +this.alumnosInscriptos[i].calificacion() + ")"
        );
    }
    */


  
        

    /*
    const cantPersonal:number = this.profesorContratado.length

            for (let i = 0 ; i < cantPersonal ; i++){
                let alumnosDelProfesor:number = this.profesorContratado[i].getListaAlumnos().length
                console.log(`Profesor [${i+1}] de ${cantPersonal}: ${this.profesorContratado[i].getnombreProfesor()}`);
                
                if (alumnosDelProfesor > 0){
                    console.log(`   Alumnos en su lista:`);
                    for (let z = 0; z < alumnosDelProfesor ;z++){
                        console.log("    → " + this.profesorContratado[i].getListaAlumnos()[z].getNombre() + 
                        ", nota: " + this.profesorContratado[i].getListaAlumnos()[z].getnota() + 
                        " (" + this.profesorContratado[i].getListaAlumnos()[z].calificacion() +")"
                        );
                    }
                }else{
                    console.log("   (Profesor sin alumnos)\n");
                }
            }
        }
    */

    public expulsarAlumno (numAlumno:number){
        const cantAlumnos:number = this.alumnosInscriptos.length
                
        if (cantAlumnos >= numAlumno){
            
            this.alumnosInscriptos.splice(numAlumno,1);
            console.log("\n[Alumno expulsado]\n");

            this.pausa = rs.question("presione enter para continuar..")
            console.clear();
        }
    }

    public expulsarPersonal (numProfesor:number){
        const cantProfesores:number = this.profesorContratado.length
        
        if (cantProfesores >= numProfesor){
            
            this.profesorContratado.splice(numProfesor,1);
            console.log("\n[Profesor expulsado]\n");

            this.pausa = rs.question("presione enter para continuar..")
            console.clear();
        }
    }

    public getCantidadProfe():number{
        return this.profesorContratado.length
    }

    public getCantidadAlumnos():number{
        return this.alumnosInscriptos.length
    }

    public getAlumno(index: number): Estudiante | undefined {
        if (index >= 0 && index < this.alumnosInscriptos.length) {
            return this.alumnosInscriptos[index];
        }
        return undefined;
    }

    // Nuevo método para obtener un profesor por índice
    public getProfesor(index: number): Profesor | undefined {
        if (index >= 0 && index < this.profesorContratado.length) {
            return this.profesorContratado[index];
        }
        return undefined;
    }
}