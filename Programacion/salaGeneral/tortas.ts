import * as rs from 'readline-sync'
/*
### ¡Gran Concurso de Tortas de Tres Arroyos! 🎂

Te toca ser jurado de un concurso de tortas, y el número de participantes puede variar. 
Tu tarea es pedir al usuario cuántos concursantes habrá y luego solicitar las puntuaciones de `Sabor`, `Presentación` y `Dificultad` 
para cada torta. Al final, debes determinar qué torta tiene el mayor puntaje. 

Y si hay empate? 🤔 En ese caso, informaremos que se produjo un empate 
(no es necesario indicar si fueron dos o mas empates ni entre que tortas es el empate, 
solo basta con indicar que se produjo empate si al menos existe uno).

## Funciones a implementar:
calcularPuntaje(sabor, presentacion, dificultad):
Recibe tres números entre 1 y 5 que representan las puntuaciones de una torta y devuelve la suma de esos números (el puntaje total del pastel).

determinarGanador():
Utiliza la librería readline-sync para pedir al usuario el número de participantes, luego solicita las puntuaciones de cada uno de ellos 
y usa la función calcularPuntaje para determinar la torta con el mayor puntaje.

*Si lo consideran necesario, pueden implementar funciones extra.
*/
console.clear();
console.log("CONCURSO DE TORTAS");
console.log("------------------");
const participantes:number = rs.questionInt("Ingrese cantidad de participantes: ");

function calcularPuntaje(sabor:number, presentacion:number, dificultad:number):number{
    let calculo:number = (sabor + presentacion + dificultad) / 3;
    return calculo
}

function pedirPuntaje (a1:number,a2:number,a3:number):number{
    let promedio:number = calcularPuntaje(a1,a2,a3);
    return promedio
}

let puntajeMaximo:number = 0;
let participanteGanador:number= 0;
let hayEmpate:boolean = false;

//            1        8    2     8           3
for (let i:number = 0; i < participantes ; i++){
    console.log(`\nPuntajes del participante: ${i+1} `);
    console.log("----------------------------------");
    let criterio1 = rs.questionInt("Ingrese puntaje de sabor: ");
    let criterio2 = rs.questionInt("Ingrese puntaje de Presentacion: ");
    let criterio3 = rs.questionInt("Ingrese puntaje de Dificultad: ");
    let contenedor:number = pedirPuntaje(criterio1,criterio2,criterio3);
    if (contenedor > puntajeMaximo){
        puntajeMaximo = contenedor
        participanteGanador = i+1; 
        hayEmpate = false;
    }else if (puntajeMaximo == contenedor) {
        hayEmpate = true;
    }
}

if (hayEmpate == true){
    console.log("Se produjo un empate en el primer puesto");
}else{
    console.log("El participante ganador es:" + participanteGanador + ", con puntaje de: " + puntajeMaximo );
    
}

































