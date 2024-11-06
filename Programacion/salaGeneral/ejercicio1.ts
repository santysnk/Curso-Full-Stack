// Filtra los productos de la categoría "Ropa" y crea un nuevo array que contenga estos productos.
// A partir del array original, calcula el precio total de todos los productos en la categoría "Calzado".
// Genera un nuevo array que incluya los nombres de todos los productos con precios mayores a 20, en mayúsculas.

const productos = [
    { nombre: "Camiseta", precio: 20, categoria:"Ropa"},
    { nombre: "Pantalón", precio: 35, categoria:"Ropa"},
    { nombre: "Zapatillas", precio: 50, categoria:"Calzado"},
    { nombre: "Bolso", precio: 25, categoria: "Accesorios" },
    { nombre: "Gorra", precio: 15, categoria: "Accesorios" },
    { nombre: "Sandalias", precio: 20, categoria: "Calzado" }
];

// 1. Filtra los productos de la categoría "Ropa"
const prodFiltrados = productos
        .filter(elemento => elemento.categoria === "Ropa");

console.log(prodFiltrados);

// 2. Calcula el precio total de todos los productos en la categoría "Calzado"
const precioTotalCalzados = productos
        .filter(elemento => elemento.categoria === "Calzado")
        .reduce((total,elemento) => total + elemento.precio, 0);

console.log(precioTotalCalzados);

// 3. Genera un nuevo array que incluya los nombres de todos los productos con precios mayores a 20, en mayúsculas
const nombresMayoresA20 = productos
        .filter(elemento => elemento.precio > 20)
        .map(elemento => elemento.nombre.toUpperCase());

console.log(nombresMayoresA20);