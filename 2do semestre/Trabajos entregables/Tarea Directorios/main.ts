import { log } from 'console';
import * as fs from 'fs';
import * as path from 'path';

let nombreArchivo : string = "";

nombreArchivo = "pedro.txt"



function obtenerNombresQueEmpiezanConR(nombreArchivo: string): string[] {
    const rutaArchivo = path.join(__dirname, nombreArchivo);

    if (!fs.existsSync(rutaArchivo)) {
        console.log("El archivo no existe.");
        return [];
    }

    const contenido = fs.readFileSync(rutaArchivo, 'utf-8');

    const nombresFiltrados = contenido
        .split('\n')
        .map(Element => Element.trim())
        .filter(Element => Element.toLowerCase().startsWith('p'));  // Ignora mayúsculas

    return nombresFiltrados;
}


console.log(obtenerNombresQueEmpiezanConR(nombreArchivo))