/*
Ejercicio entregable – Entrega 21/04

    ➡️ Una prestigiosa escuela de arte necesita un sistema para organizar a las personas que forman parte de su comunidad: 
    tanto quienes enseñan como quienes aprenden.

    ➡️ Además, la escuela ofrece distintos cursos y necesita poder gestionar quién dicta cada uno y quiénes participan.

    ➡️ Tu objetivo es modelar este sistema utilizando Programación Orientada a Objetos en TypeScript. 
    Identifica qué entidades intervienen en el sistema, qué características comparten y en qué se diferencian. 
    Piensa qué relaciones podrían tener entre sí y cómo representarías esas conexiones de forma que, 
    si una entidad se elimina, las demás sigan funcionando correctamente.

    ➡️ También es importante que el sistema pueda recorrer una lista de personas del club y,
    al invocar un mismo método, obtenga una presentación personalizada de cada una, según su rol.

    ➡️ Por último, asegurate de que los cursos puedan tener un responsable y una lista de participantes, 
    y que sea posible listar toda la información relevante de cada curso de forma ordenada.

    💡 Tip: Piensa cómo reutilizar atributos y comportamientos comunes entre personas, 
    cómo podrías representar una actividad con sus participantes y cómo harías para que 
    el sistema pueda tratar a diferentes tipos de personas de forma uniforme.
*/

import { Profesor } from "./Profesor";
import { Estudiante } from "./Estudiante";
import { Curso } from "./Curso";

// Crear profesor responsable del curso
const profe1 = new Profesor("Laura", "Gomez", 30145135, 45, "Pintura");

// Crear estudiantes
const est1 = new Estudiante("Ana", "Lopez", 33464579, 20, "Regular");
const est2 = new Estudiante("Carlos", "Martinez", 44125696, 22, "No Regular");
const est3 = new Estudiante("Sofía", "Fernandez", 55366317, 19, "Regular");

// Crear curso
const cursoPintura = new Curso("Pintura Creativa", profe1);
const cursoCostura = new Curso("Costura inicial");

// Agregar estudiantes al curso
cursoPintura.agregarEstudiante(est1);
cursoPintura.agregarEstudiante(est2);
cursoPintura.agregarEstudiante(est3);

// Listar participantes del curso
cursoPintura.listarParticipantes();

cursoCostura.listarParticipantes();
