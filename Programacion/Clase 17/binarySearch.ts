/*
BINARY SEARCH (Búsqueda Binaria)
En vez de revisar la lista elemento por elemento, divide la lista en dos partes en cada paso, 
comparando el elemento que queda en el medio con el elemento buscado. Dependiendo del resultado de esa comparación, 
descarta la mitad de los elementos y sigue buscando en la otra mitad. En cada paso, el rango de búsqueda se reduce a la mitad.

Ventaja: Muy eficiente en grandes volúmenes de datos.

Desventaja: La lista debe estar ordenada.

Complejidad: O(log n) donde n es el número de elementos de la lista. En cada paso se reduce el tamaño del espacio de búsqueda a la mitad.
*/

const names: string[] =
    [
        "Alejo",
        "Valentina",
        "Santiago",
        "Camila",
        "Mateo",
        "Lucía",
        "Sofía",
        "Lucas",
        "Isabella",
        "Sebastián",
        "Martina",
        "Diego",
        "Fernanda",
        "Gabriel",
        "Emilia",
        "Juan",
        "Lucía",
        "Carlos",
        "Paula",
        "Ricardo",
        "Mariana"
    ];

// Ordenamos los nombres antes de realizar la búsqueda binaria
names.sort();
console.log("Lista ordenada:", names);

function binarySearch(arr: string[], target: string): number {
    let left: number = 0;
    let right: number = arr.length - 1;

    // Mientras el índice de la izq sea menor o igual al de la der.
    while (left <= right) {

        // Calculamos el índice del elemento en el medio del arreglo
        const mid: number = Math.floor((left + right) / 2);
        // Si el elemento en el medio es el buscado, devuelve el índice (mid)
        if (arr[mid] === target) {
            return mid;
        }
        // Si el target es mayor que mid, ignoramos la mitad derecha
        else if (arr[mid] > target) {
            right = mid - 1;
        }
        // Si target es mayor, ignoramos la mitad izquierda
        else {
            left = mid + 1;
        }
    }
    return -1;
}

const targetName = "Sofía";

const result = binarySearch(names, targetName);

if (result !== -1) {
    console.log(`El nombre ${targetName} fue encontrado en el índice ${result}.`);
} else {
    console.log(`El nombre ${targetName} no se encuentra en la lista.`);
}