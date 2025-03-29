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
[9] CONSULTAR NOTA ALUMNO

[0] SALIR
\n`);
    option = rs.questionInt("Ingrese una opcion para continuar: ")
    
    switch(true){
        case (option == 1):
            let nameProfe: string = "";
            let checkIngresoProf: boolean = false;
            let checkProfe: boolean = false;

            console.clear();
            console.log("Agregar profesor");
            console.log("----------------");

            while (!checkIngresoProf) {
                // Validar que se ingrese un nombre y que no esté repetido
                while (!checkProfe) {
                    nameProfe = rs.question("Ingrese nombre: ");

                    if (nameProfe != null && nameProfe.trim() !== "") {
                        let profesorRepetido: boolean = false;
                        let listaProfesores = EscuelaEjemplo.getListaProfesores();

                        for (let i = 0; i < listaProfesores.length; i++) {
                            if (nameProfe === listaProfesores[i].getnombreProfesor()) {
                                profesorRepetido = true;
                                break;
                            }
                        }
                        
                        if (profesorRepetido) {
                            console.log("\n[Profesor repetido (ya existe en la lista)]");
                        } else {
                            checkProfe = true;
                        }
                    } else {
                        console.log("[Nombre incorrecto]");
                    }
                }
                // Si el nombre es válido y no está duplicado, se agrega el profesor.
                EscuelaEjemplo.setContratarPersonal(nameProfe);
                checkIngresoProf = true;
            }
            break;

        
        case (option == 2):    
            let nameAlumno: string = "noName";
            let notaAlumno: number = 0;
            let checkIngresoAlum: boolean = false;
            let checkAlumno: boolean = false;
            let checkNota: boolean = false;
        
            console.clear();
            console.log("Agregar alumno");
            console.log("---------------");
        
            while (!checkIngresoAlum) {
        
                // Verificar nombre de alumno sin duplicados
                while (!checkAlumno) {
                    nameAlumno = rs.question("Ingrese nombre: ");
                    if (nameAlumno != null && nameAlumno.trim() !== "") {  
                        let alumnoRepetido: boolean = false;
                        let listaAlumnos = EscuelaEjemplo.getListaEstudiantes();

                        for (let i = 0; i < listaAlumnos.length; i++){
                            if (nameAlumno === listaAlumnos[i].getNombre()){
                                alumnoRepetido = true;
                                break;
                            }
                        }

                        if (alumnoRepetido){
                            console.log("\n[Alumno repetido (el alumno ya se encuentra en la lista)]");
                        } else {
                            checkAlumno = true;
                        }

                    } else {
                        console.log("[nombre incorrecto]");
                    }
                }    
                
                // Verificar que la nota esté en el rango de 0 a 10
                while (!checkNota){
                    notaAlumno = rs.questionInt("Ingrese nota: ");
                    if (notaAlumno >= 0 && notaAlumno <= 10){
                        checkNota = true;    
                    } else {
                        console.log("[nota incorrecta]");
                    } 
                } 
                
                if (checkAlumno && checkNota){
                    EscuelaEjemplo.setEstudianteNuevo(nameAlumno, notaAlumno);
                    checkIngresoAlum = true;
                }
            }
            break;
        

        case (option == 3):    
            console.clear();
            console.log("Profesores Contratados");
            console.log("----------------------\n");
            EscuelaEjemplo.getPersonal();
            pausa = rs.question("\npresione enter para continuar..")
            console.clear();
            break;

        case (option == 4):
            let listarAlumnos:li    
            console.clear();
            console.log("Alumnos matriculados");
            console.log("--------------------\n");
            EscuelaEjemplo.getListaEstudiantes();
            pausa = rs.question("\npresione enter para continuar..")
            console.clear();
            break;

        case (option == 5):

            let numeroProfeExpulsado:number|null =null; 
            
            console.clear();
            console.log("Expulsar Profesor");
            console.log("----------------\n");
            console.log("listado:");
            console.log("------\n");
            EscuelaEjemplo.getPersonal();
            console.log("************************\n");
            numeroProfeExpulsado = rs.questionInt("ingrese numero para expulsar:") - 1;
            
            if (numeroProfeExpulsado < EscuelaEjemplo.getCantidadProfe() && numeroProfeExpulsado >= 0){
                EscuelaEjemplo.expulsarPersonal(numeroProfeExpulsado)
            }else{
                console.log(`\n[numero de PROFESOR incorrecto]\n`);
                pausa = rs.question("presione enter para continuar..")
                console.clear();
            }
            break;

        case (option == 6):

            let numeroAlumnoExpulsado:number|null =null; 
            
            console.clear();
            console.log("Expulsar Alumno");
            console.log("----------------\n");
            console.log("listado:");
            console.log("------\n");
            EscuelaEjemplo.getEstudiantes();
            console.log("************************\n");
            numeroAlumnoExpulsado = rs.questionInt("ingrese numero para expulsar:") - 1;
            
            if (numeroAlumnoExpulsado < EscuelaEjemplo.getCantidadAlumnos() && numeroAlumnoExpulsado >= 0){
                EscuelaEjemplo.expulsarAlumno(numeroAlumnoExpulsado)
            }else{
                console.log(`\n[numero de ALUMNO incorrecto]\n`);
                pausa = rs.question("presione enter para continuar..")
                console.clear();
            }
            break;

            case (option == 7):
            console.clear();
            console.log("Agregar alumno a la lista de un profesor");
            console.log("-----------------------------------------");
            
            EscuelaEjemplo.getPersonal();
            let indexProfe = rs.questionInt("\nSeleccione el numero del profesor: ") - 1;
            let profesorSeleccionado = EscuelaEjemplo.getProfesor(indexProfe);
            
            if (profesorSeleccionado) {
                // Mostrar lista de alumnos de la escuela
                console.clear();
                console.log("Lista de alumnos inscritos");
                console.log("---------------------------\n");
                EscuelaEjemplo.getEstudiantes();

                let indexAlumno = rs.questionInt("\nSeleccione el numero del alumno: ") - 1;
                let alumnoSeleccionado = EscuelaEjemplo.getAlumno(indexAlumno);

                if (alumnoSeleccionado) {
                    profesorSeleccionado.agregarEstudiante(alumnoSeleccionado);
                    console.log("\n[Alumno agregado a la lista del profesor.]");
                } else {
                    console.log("\n[Numero de alumno invalido.]");
                }
            } else {
                console.log("\n[Numero de profesor invalido.]");
            }
            pausa = rs.question("\nPresione enter para continuar");
            console.clear();
            break;

        case (option == 8):
            console.clear();
            console.log("Eliminar alumno de la lista de un profesor");
            console.log("-------------------------------------------");
            
            // Mostrar lista de profesores
            EscuelaEjemplo.getPersonal();
            let indexProfeElim = rs.questionInt("Seleccione el numero del profesor: ") - 1;
            let profesorParaEliminar = EscuelaEjemplo.getProfesor(indexProfeElim);

            if (profesorParaEliminar) {
                // Mostrar lista de alumnos asignados al profesor
                let listaAlumnos = profesorParaEliminar.getListaAlumnos();
                if (listaAlumnos.length > 0) {
                    console.log("Lista de alumnos del profesor:");
                    for (let i = 0; i < listaAlumnos.length; i++) {
                        console.log(`Alumno ${i + 1}: ${listaAlumnos[i].getNombre()}`);
                    }
                    let indexAlumnoElim = rs.questionInt("Seleccione el numero del alumno a eliminar: ") - 1;
                    if (indexAlumnoElim >= 0 && indexAlumnoElim < listaAlumnos.length) {
                        profesorParaEliminar.eliminarEstudiante(indexAlumnoElim);
                        console.log("Alumno eliminado de la lista del profesor.");
                    } else {
                        console.log("Numero de alumno invalido.");
                    }
                } else {
                    console.log("El profesor no tiene alumnos asignados.");
                }
            } else {
                console.log("Numero de profesor invalido.");
            }
            pausa = rs.question("presione enter para continuar..");
            console.clear();
            break;

        case (option == 9):
            console.clear();
            console.log("Consultar nota de un alumno");
            console.log("---------------------------");
            // Mostrar lista de alumnos
            EscuelaEjemplo.getEstudiantes();
            let indexAlumnoNota = rs.questionInt("Seleccione el numero del alumno: ") - 1;
            let alumnoConsultar = EscuelaEjemplo.getAlumno(indexAlumnoNota);
            if (alumnoConsultar) {
                console.log(`Nombre: ${alumnoConsultar.getNombre()}`);
                console.log(`Nota: ${alumnoConsultar.getnota()}`);
                console.log(alumnoConsultar.calificacion() ? "Aprobado" : "No aprobado");
            } else {
                console.log("Numero de alumno invalido.");
            }
            pausa = rs.question("presione enter para continuar..");
            console.clear();
            break;
    }

}
console.log("HA FINALIZADO");  
