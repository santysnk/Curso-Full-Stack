/*
Estructuras de Datos y Métodos: Jardín.
El jardín infantil necesita un programa para poder asignar cursos a las aulas:

    • Se cuentan con tres aulas: Azul, Verde y Amarilla.
    • Cada aula cuenta con una capacidad diferente (es decir, un número de bancos).
    • La aula Azul tiene 40 bancos, la Verde 35 y la Amarilla 30.
    • Dado un número de infantes ingresado por el usuario, el programa deberá determinar el aula que minimice la cantidad de bancos vacíos.
    • La salida del algoritmo es el color que identifica al aula asignada. 

Ejemplo: si la cantidad de personas de un curso es 34, entonces el aula a asignar será la Verde. 
El aula Amarilla no puede ser asignada porque la cantidad de personas es menor a la cantidad de bancos disponibles. 
El aula Azul es descartada porque quedan más bancos inutilizados que en el aula Verde (6 versus 1).
*/

import * as rs from "readline-sync";

console.clear();
let infantes: number = rs.questionInt("Ingrese la cantidad de infantes para designar una sala: ");

const salaAzul: number = 40;
const salaVerde: number = 35;
const salaAmarilla: number = 30;

if (infantes <= salaAmarilla){
    console.log(`\nCantidad de infantes: "${infantes}", se asigna la sala: Amarilla`);
}else if(infantes <= salaVerde){
    console.log(`\nCantidad de infantes: "${infantes}", se asigna la sala: Verde`);
}else{
    console.log(`\nCantidad de infantes: "${infantes}", se asigna la sala: Azul`);
}

