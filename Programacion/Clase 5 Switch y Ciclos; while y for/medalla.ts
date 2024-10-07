import * as fs from 'readline-sync'

/* Desarrolle un algoritmo que, dada una posición en una carrera se determine el tipo de medalla a entregar.
• Tenga en cuenta que para el primer puesto se entrega medalla de oro, segundo puesto medalla de plata y tercer 
puesto medalla de bronce. 
En caso que quede en otra posición se entrega certificado de participación*/

console.clear()

//let posicion : number = fs.questionInt("ingrese posicion de llegada: ")

let letra : string = fs.question("ingrese posicion de llegada: ")

switch  (letra){
    case "s" :
            console.log("\n Entrega medalla de Oro");
            break;
    case "a":
            console.log("\n Entrega medalla de Plata");
            break;
    case "f":
            console.log("\n Entrega medalla de Bronce");
            break;

    default:
            console.log("\n Se entrega certificado de mencion");
            break;
}