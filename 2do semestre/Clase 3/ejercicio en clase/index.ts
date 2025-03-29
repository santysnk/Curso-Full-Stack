/* Ejercicios - En Clase

Ejercicio 1

Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:

    Los profesores deben tener un listado de sus alumnos.

    Cada alumno debe saber su nota e informar si está aprobado o no (es decir, si la nota es mayor que 7).

    La escuela debe tener un registro de los alumnos y maestros, y debe poder matricular/contratar y expulsar/despedir a los mismos. 
    
    Alumnos: Francisco Urban y Santiago Casal */

import * as rs from "readline-sync";
import { Escuela } from "./ClaseEscuela";
import { Estudiante } from "./ClaseEstudiante"
import { Profesor } from "./ClaseProfesor"



console.clear();
let option:number|null=null;
let pausa:string|null = null;

const EscuelaEjemplo:Escuela = new Escuela();

while (option != 0){
    console.log("ESCUELA EJEMPLO");
    console.log("---------------");
    console.log(`
[1] AGREGAR PROFESOR
[2] AGREGAR ALUMNO
[3] MOSTRAR LISTA PROFESORES
[4] MOSTRAR LISTA ALUMNOS
[5] EXPULSAR PROFESOR
[6] EXPULSAR ALUMNO
[7] AGREGAR ALUMNO A LISTA DE PROFESOR
[8] ELIMINAR ALUMNO DE LISTA DE PROFESOR

[0] SALIR
\n`);
    option = rs.questionInt("Ingrese una opcion para continuar: ")
    
    switch(true){
        case (option == 1):
            let nameProfe:string|null = null;

            console.clear();
            console.log("Agregar profesor");
            console.log("----------------");
            nameProfe = rs.question("Ingrese nombre: ");

            if (nameProfe != null && nameProfe.trim() !=""){
                EscuelaEjemplo.setContratarPersonal(nameProfe)
            }else{
                console.log("no se ha podido agregar profesor");
            }
            break;
        
        case (option == 2):    
            let nameAlumno:string|null = null;
            let notaAlumno:number|null = null;

            console.clear();
            console.log("Agregar alumno");
            console.log("----------------");
            nameAlumno = rs.question("Ingrese nombre: ");
            notaAlumno = rs.questionInt("Ingrese nota: ");

            if (nameAlumno != null && nameAlumno.trim() !="" && notaAlumno >= 0){
                EscuelaEjemplo.setEstudianteNuevo(nameAlumno,notaAlumno)
            }else{
                console.log("no se ha podido agregar alumno");
            }
            break;

        case (option == 3):    
            console.clear();
            console.log("Profesores Contratados");
            console.log("----------------------\n");
            console.log(EscuelaEjemplo.getPersonal());
            pausa = rs.question("presiones cualquier tecla para continuar")
            console.clear();
            break;

        case (option == 4):    
            console.clear();
            console.log("Alumnos matriculados");
            console.log("--------------------\n");
            console.log(EscuelaEjemplo.getEstudiantes());
            pausa = rs.question("presiones cualquier tecla para continuar")
            console.clear();
            break;

        case (option == 5):

            let numeroProfeExpulsado:number|null =null; 
            
            console.clear();
            console.log("Expulsar Profesor");
            console.log("----------------\n");
            console.log("listado:");
            console.log("------\n");
            console.log(EscuelaEjemplo.getPersonal());
            console.log("************************\n");
            numeroProfeExpulsado = rs.questionInt("ingrese numero para expulsar:") - 1;
            
            if (numeroProfeExpulsado < EscuelaEjemplo.getCantidadProfe()){
                EscuelaEjemplo.expulsarPersonal(numeroProfeExpulsado)
            }else{
                console.log("no se ha podido expulsar al profesor");
            }
            break;
    }

}
console.log("HA FINALIZADO");  
