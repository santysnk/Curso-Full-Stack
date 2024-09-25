import * as rs from 'readline-sync'

/* 
En una prueba, un piloto tiene que completar 4 vueltas:
    • Se necesita un programa que permita ingresar por teclado el tiempo de cada vuelta
    • El programa debe retornar el tiempo total y el
        promedio de vuelta
*/

console.clear()

console.log("INGRESOS DE TIEMPOS DE VUELTAS EN (MIN)");
console.log("----------------------------------------");
let lap1:number = rs.questionInt("Ingrese tiempo vuelta 1: ");
let lap2:number = rs.questionInt("Ingrese tiempo vuelta 2: ");
let lap3:number = rs.questionInt("Ingrese tiempo vuelta 3: ");
let lap4:number = rs.questionInt("Ingrese tiempo vuelta 4: ");
let totalTime:number = lap1+lap2+lap3+lap4;

console.log("----------------------------------------");
console.log("El tiempo total (min) es de: ",totalTime);
console.log("El promedio (min) es de: ",totalTime/4);