import * as rs from "readline-sync";

// Funcion para cargar con nombres un arreglo
export function cargarArreglo (arreglo:number[],nombreArreglo:string,long:number):number[]{
    for (let i:number = 0; i < long;i++){
        console.log(`Ingresos del alumno ${i+1}:`);
        console.log("-----------------------------");
        arreglo[i] = notasAlumnos(i)
    }
    return arreglo
}

function notasAlumnos (numeroAlumno:number){
    let notas:number = 0;
    let suma:number = 0;
    for (let i:number = 0; i < 3;i++){
        notas = rs.questionInt(`Ingrese nota para el alumno ${numeroAlumno + 1}, ${i + 1} de 3: `);
        suma += notas;
    }
    return suma/3
}


