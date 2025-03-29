import { Estudiante } from "./ClaseEstudiante"
import { Profesor } from "./ClaseProfesor"
import * as rs from "readline-sync";

export class Escuela{
    private alumnosInscriptos:Estudiante[]=[];
    private profesorContratado:Profesor[]=[];
    private pausa:string|null = null; // Variable para pausar la ejecución y esperar ingreso del usuario.

    // Metodo para contratar a un profesor.
    setContratarPersonal (personaLName:string){
        const nuevoProfe:Profesor = new Profesor(personaLName)

        this.profesorContratado.push(nuevoProfe);

        console.log("\n[Profesor agregado]\n");
        this.pausa = rs.question("presione enter para continuar..")
        console.clear();
    }

     // Metodo para inscribir un nuevo estudiante.
    setEstudianteNuevo (alumno:string, nota:number){
        const nuevoAlumno:Estudiante = new Estudiante(alumno,nota);
        
        this.alumnosInscriptos.push(nuevoAlumno);

        console.log("\n[alumno agregado]\n");
        this.pausa = rs.question("presione enter para continuar..")
        console.clear();
    }

    // Retorna la lista de estudiantes inscritos.
    getListaEstudiantes(){
        return this.alumnosInscriptos
    }

    
    //  Muestra la lista de estudiantes.
    //  parametro "conDatos": Si es true, muestra nombre, nota y calificación; si no, muestra solo el nombre.
    public MostarListaEstudiantes(conDatos?: Boolean){   
        let cantAlumnos = this.alumnosInscriptos.length 

        console.clear();
        console.log("Lista de alumnos [" + cantAlumnos + "]");
        console.log("--------------------\n");

        if (conDatos){
            for (let i = 0 ; i < cantAlumnos ; i++){
                console.log("Alumno ["+ (i+1) + "]: "  +
                this.alumnosInscriptos[i].getNombreEstudiante() + 
                " Nota: " + this.alumnosInscriptos[i].getNotaEstudiante() +
                " (" + this.alumnosInscriptos[i].calificacion() + ")"
                );
            }
        }else{  
            // Muestra solo el nombre de cada alumno.  
            for (let i = 0 ; i < cantAlumnos ; i++){
                console.log(`Alumno [${i+1}] de ${cantAlumnos}: ${this.alumnosInscriptos[i].getNombreEstudiante()}`);
            }
        }
    }

    // Retorna la lista de profesores contratados.
    getListaProfesores(){
        return this.profesorContratado
    }

    
   // Muestra la lista de profesores.
   // parametro "conListaAlumnos": Si es true, muestra también la lista de alumnos asignados a cada profesor.
    public MostarListaProfesores(conListaAlumnos?: Boolean){   
        let cantProfe = this.profesorContratado.length 

        console.clear();
        console.log("Lista de profesores [" + cantProfe + "]" );
        console.log("-----------------------");
        
        for (let i = 0 ; i < cantProfe ; i++){
            console.log(`\nProfesor [${i+1}]: ${this.profesorContratado[i].getnombreProfesor()}`);
            
            if (conListaAlumnos){
                let listaAlumProfesor = this.profesorContratado[i].getListaAlumnos()
                let cantAlumLista:number = listaAlumProfesor.length

                if (cantAlumLista > 0){
                    console.log(`   Alumnos en su lista:`);
                    for (let z = 0; z < cantAlumLista ; z++){
                        console.log("    → " + listaAlumProfesor[z].getNombreEstudiante() + 
                        ", nota: " + listaAlumProfesor[z].getNotaEstudiante() + 
                        " (" + listaAlumProfesor[z].calificacion() +")"
                        );
                    }
                }else{
                    console.log("   (Profesor sin alumnos)\n");
                }
            }
        }
        
    }

    // Retorna la cantidad de profesores contratados.
    public cantProfesores():number{
        return this.profesorContratado.length
    }

    // Expulsa (elimina) a un alumno de la lista según su índice.
    public expulsarAlumno (numAlumno:number){
        const cantAlumnos:number = this.alumnosInscriptos.length
                
        if (cantAlumnos >= numAlumno){
            
            this.alumnosInscriptos.splice(numAlumno,1);
            console.log("\n[Alumno expulsado]\n");

            this.pausa = rs.question("presione enter para continuar..")
            console.clear();
        }
    }

    // Expulsa (elimina) a un profesor de la lista según su índice.
    public expulsarProfesor (numProfesor:number){
        const cantProfesores:number = this.profesorContratado.length
        
        if (cantProfesores >= numProfesor){
            
            this.profesorContratado.splice(numProfesor,1);
            console.log("\n[Profesor expulsado]\n");

            this.pausa = rs.question("presione enter para continuar..")
            console.clear();
        }
    }

    // método para obtener un profesor por índice en la lista.
    public getProfesor(index: number): Profesor | undefined {
        if (index >= 0 && index < this.profesorContratado.length) {
            return this.profesorContratado[index];
        }
        return undefined;
    }

    // método para obtener un alumno por índice en la lista.
    public getAlumno(index: number): Estudiante | undefined {
        if (index >= 0 && index < this.alumnosInscriptos.length) {
            return this.alumnosInscriptos[index];
        }
        return undefined;
    }

    
}