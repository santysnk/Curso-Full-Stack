import { Auto } from "./auto";

// Instanciamos objetos y probamos los métodos
const auto1 = new Auto("Toyota", "Corolla", 2020);
const auto2 = new Auto("Honda", "Civic", 2019);

console.log("Probando el primer auto:");
auto1.acelerar();
auto1.frenar();

console.log("\nProbando el segundo auto:");
auto2.acelerar();
auto2.frenar();