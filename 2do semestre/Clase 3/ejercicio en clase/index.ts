/* Ejercicios - En Clase

Ejercicio 1

Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:

    Los profesores deben tener un listado de sus alumnos.

    Cada alumno debe saber su nota e informar si está aprobado o no (es decir, si la nota es mayor que 7).

    La escuela debe tener un registro de los alumnos y maestros, y debe poder matricular/contratar y expulsar/despedir a los mismos. 
    
    Alumnos: Francisco Urban y Santiago Casal */

import * as rs from "readline-sync";
import { Escuela } from "./ClaseEscuela";

console.clear();
let option:number|null=null;
let pausa:string|null = null;

// Instanciamos la escuela.
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
    
     // Usamos un switch con casos basados en la opción ingresada.
    switch(true){
        case (option == 1):
            let nameProfe: string = "";
            let checkIngresoProf: boolean = false;
            let checkProfe: boolean = false;

            console.clear();
            console.log("----------------");

            while (!checkIngresoProf) {

                // Validación de ingreso: nombre no vacío y sin duplicados.
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
             // AGREGAR ALUMNO
            
            let nameAlumno: string = "";
            let notaAlumno: number = 0;
            let checkIngresoAlum: boolean = false;
            let checkAlumno: boolean = false;
            let checkNota: boolean = false;
        
            console.clear();
            console.log("Agregar alumno");
            console.log("---------------");
        
            while (!checkIngresoAlum) {
        
                // Validar nombre del alumno (no vacío y sin duplicados).
                while (!checkAlumno) {
                    nameAlumno = rs.question("Ingrese nombre: ");
                    if (nameAlumno != null && nameAlumno.trim() !== "") {  
                        let alumnoRepetido: boolean = false;
                        let listaAlumnos = EscuelaEjemplo.getListaEstudiantes();

                        for (let i = 0; i < listaAlumnos.length; i++){
                            if (nameAlumno === listaAlumnos[i].getNombreEstudiante()){
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
             // MOSTRAR LISTA DE PROFESORES (con detalles)
            EscuelaEjemplo.mostrarListaProfesores(true);

            pausa = rs.question("\npresione enter para continuar..")
            console.clear();
            break;

        case (option == 4):
            // MOSTRAR LISTA DE ALUMNOS (con detalles)
            EscuelaEjemplo.MostrarListaEstudiantes(true);

            pausa = rs.question("\npresione enter para continuar..")
            console.clear();
            break;

        case (option == 5):
            // EXPULSAR PROFESOR
            console.clear();
            console.log("Expulsar Profesor");
            console.log("*****************\n");
            
            EscuelaEjemplo.mostrarListaProfesores(true);

            console.log("************************\n");

            let indexProfeExpulsar = rs.questionInt("ingrese numero para expulsar:") - 1;
            let cantProfesores = EscuelaEjemplo.cantProfesores();

            if (indexProfeExpulsar < cantProfesores && indexProfeExpulsar >= 0){
                EscuelaEjemplo.expulsarProfesor(indexProfeExpulsar)
            }else{
                console.log(`\n[numero de PROFESOR incorrecto]\n`);
                pausa = rs.question("presione enter para continuar..")
                console.clear();
            }
            break;

        case (option == 6):
            // EXPULSAR ALUMNO                       
            console.clear();
            console.log("Expulsar Alumno");
            console.log("***************\n");

            EscuelaEjemplo.MostrarListaEstudiantes();

            console.log("************************\n");

            let indexAlum:number = rs.questionInt("ingrese numero para expulsar:") - 1;
            
            if (indexAlum < EscuelaEjemplo.getListaEstudiantes().length && indexAlum >= 0){
                EscuelaEjemplo.expulsarAlumno(indexAlum)
            }else{
                console.log(`\n[numero de ALUMNO incorrecto]\n`);
                pausa = rs.question("presione enter para continuar..")
                console.clear();
            }
            break;

        case (option == 7):
            // AGREGAR ALUMNO A LA LISTA DE UN PROFESOR
            EscuelaEjemplo.mostrarListaProfesores();

            let indexProfe = rs.questionInt("\nSeleccione el numero del profesor: ") - 1;
            let profesorSeleccionado = EscuelaEjemplo.getProfesor(indexProfe);
            
            if (profesorSeleccionado) {

                // Mostrar lista de alumnos disponibles
                EscuelaEjemplo.MostrarListaEstudiantes(true);

                let indexAlumno = rs.questionInt("\nSeleccione el numero del alumno: ") - 1;
                let alumnoSeleccionado = EscuelaEjemplo.getAlumno(indexAlumno);

                let listaAlumDeProf = profesorSeleccionado.getListaAlumnos();
                let cantListaAlumDeProf = listaAlumDeProf.length;

                if (alumnoSeleccionado) {
                    // Validar que el alumno no esté ya asignado al profesor.
                    let alumnoRepetido: boolean = false;

                    for (let i = 0; i < cantListaAlumDeProf; i++){
                        if (alumnoSeleccionado.getNombreEstudiante() === listaAlumDeProf[i].getNombreEstudiante()){
                            alumnoRepetido = true;
                            console.log("\n[Alumno repetido (ya se encuentra en la lista del profesor)]");
                            break;
                        }
                    }

                    if (!alumnoRepetido){
                        profesorSeleccionado.agregarEstudiante(alumnoSeleccionado);
                        console.log("\n[Alumno agregado a la lista del profesor.]");
                    }    

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
             // ELIMINAR ALUMNO DE LA LISTA DE UN PROFESOR
            console.clear();
            console.log("Eliminar alumno de la lista de un profesor");
            console.log("-------------------------------------------");
            
            // Mostrar lista de profesores
            EscuelaEjemplo.mostrarListaProfesores(true);

            let indexProfeElim = rs.questionInt("\nSeleccione el numero del profesor: ") - 1;
            let profesorParaEliminar = EscuelaEjemplo.getProfesor(indexProfeElim);

            if (profesorParaEliminar) {
                // Mostrar lista de alumnos asignados al profesor
                let listaAlumnos = profesorParaEliminar.getListaAlumnos();

                if (listaAlumnos.length > 0) {
                    console.clear();
                    console.log("Lista de alumnos del profesor:");
                    console.log("-----------------------------\n");

                    for (let i = 0; i < listaAlumnos.length; i++) {
                        console.log(`    → Alumno [${i + 1}]: ${listaAlumnos[i].getNombreEstudiante()}`);
                    }

                    let indexAlumnoElim = rs.questionInt("\nSeleccione el numero del alumno a eliminar: ") - 1;

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
            pausa = rs.question("\npresione enter para continuar..");
            console.clear();
            break;

        case (option == 9):
            // CONSULTAR NOTA DE UN ALUMNO (se muestra la lista con sus calificaciones)
            console.clear();
            console.log("Consultar nota de un alumnos");
            console.log("---------------------------");
            // Mostrar lista de alumnos
            EscuelaEjemplo.MostrarListaEstudiantes(true);

            pausa = rs.question("\npresione enter para continuar..");
            console.clear();
            break;
    }
}
console.log("HA FINALIZADO");  
