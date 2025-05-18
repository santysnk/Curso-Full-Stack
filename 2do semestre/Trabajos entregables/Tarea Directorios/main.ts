import * as fs from 'fs';
import * as path from 'path';
import * as rs from 'readline-sync'

let nombreArchivo:string;


while (true){
    nombreArchivo = rs.question("ingrese nombre del archivo a crear");

    if (nombreArchivo.trim() === ""){
        console.log("Saliendo del programa...");
        break;
    }

    const 
}
