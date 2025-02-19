/*
Personas en un Bar
El gerente de una discoteca desea tener un registro del número de personas que ingresan al local. 
Para mantener un ambiente seguro y controlado, solo se permite la entrada a personas de entre 18 y 40 años. 
Actualmente, el total de personas en el local es de 270.

El gerente necesita saber:

    * Cuántas personas menores de 21 años han ingresado.
    * Cuántas personas de 21 años o más han ingresado
    * El promedio de edad de las personas que ingresaron al local.

Para la simulación de las edades de los asistentes, puedes utilizar la siguiente función que genera un número aleatorio entre un valor mínimo y máximo:

function aleatorio(min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
} 
*/

const cantPersonas:number = 270;
let asistentes: number[] = new Array(cantPersonas);
let menorDeVeintiuno:number = 0;
let mayorDeVeintiuno:number = 0;
let promedioEdad :number = 0;

function aleatorio(min:number, max:number) { 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

for (let i = 0 ; i < cantPersonas ; i++ ){
    asistentes[i] = aleatorio(18,40);
    
    if (asistentes[i] < 21 ){
        menorDeVeintiuno++;
    }else{
        mayorDeVeintiuno++;
    }
    
    promedioEdad = promedioEdad + asistentes[i];
}

promedioEdad = promedioEdad / cantPersonas;

console.log(`
Asistentes a la Discoteca: ${cantPersonas}
----------------------------------------------

Se encontraron ${menorDeVeintiuno} personas menores de 21 años.
Se encontraron ${mayorDeVeintiuno} personas de 21 años o más.
El promedio de edad de los asistentes es de: ${Math.floor(promedioEdad)} años.   
`);

