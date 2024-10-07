/*
Estructuras de Datos – Arreglos: Ejercicio – Completar Arreglo

    • Llenar un array de 10 posiciones con números aleatorios entre 0 y 99

    • Para obtener números aleatorios crear una función Azar, que se base en las funciones disponibles en el paquete Math:

    -Math.random() devuelve un nro al azar entre 0 y 1.
*/

const randomNums: number[] = new Array(10);
const long: number = randomNums.length;

for (let i = 0; i < long; i++){
    randomNums[i] = randomNumber(99);
}

function randomNumber(top:number):number {
    const randomN: number = Math.round(Math.random() * top);
    return randomN
}   