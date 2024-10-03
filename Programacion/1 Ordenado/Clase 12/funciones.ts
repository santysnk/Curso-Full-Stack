//crea una funcion para crear una matriz de N x M

function crearMatrix(filas:number,columnas:number):number[][]{
    const matrix:number [][] = new Array(filas);
    //crear filas (arreglo exterior)
    for (let i:number = 0;i < matrix.length;i++){
        //crear comulnas (arreglo interior)
        matrix[i]= new Array(columnas);
    }
    return matrix
}

const matrix01 = crearMatrix(5,6);
console.log(matrix01);


//luego tenemos esto mas general:

for (let item of matrix01){
    for (let innerItem of item){
        console.log(innerItem);
    }
}

/*
El código que me compartes está recorriendo una matriz (es decir, un arreglo de arreglos) en JavaScript o TypeScript y 
luego imprime cada elemento individual de esa matriz.

Aquí está el desglose de lo que hace:

    1. **`createMatrix(2, 3)`**: Asumo que esta función crea una matriz de 2 filas y 3 columnas 
    (aunque la implementación de `createMatrix` no está mostrada, lo que parece estar creando es una matriz 2x3).

    2. **`console.log(matrix01);`**: Esto imprimirá la matriz completa (es decir, el arreglo bidimensional) en la consola.

    3. **Primer bucle `for`**: Se utiliza para iterar sobre cada fila de la matriz (`matrix01`). En este caso, `item` representaría 
        cada subarreglo dentro de la matriz, o cada fila de la misma.

    4. **Segundo bucle `for`**: Este bucle recorre los elementos dentro de cada fila de la matriz. 
        Es decir, `innerItem` sería cada valor individual dentro de cada subarreglo (fila).

    5. **`console.log(innerItem);`**: Finalmente, imprime cada uno de los elementos individuales de la matriz en la consola.

### En resumen:
    Este código:
        1. Crea una matriz.
        2. Imprime la matriz completa.
        3. Luego recorre la matriz y, por cada fila, recorre sus elementos, imprimiéndolos uno por uno.

Si `createMatrix(2, 3)` devuelve una matriz como esta:


[
  [1, 2, 3],
  [4, 5, 6]
]


La salida sería algo como:

[ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
1
2
3
4
5
6
```
*/