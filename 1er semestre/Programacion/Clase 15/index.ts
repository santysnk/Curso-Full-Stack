import { iCar } from "./type";
import { iCar2 } from "./type";

console.clear();
console.log(`Creación con función constructora con tipo explícito para "this"`);
console.log(`----------------------------------------------------------------`);
// Definición de la función constructora con tipo explícito para `this`
function Car(this: iCar, make: string, model: string, year: number, color: string) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

// Usar el tipo `ICar` para el constructor
const car1 = new (Car as any)("Ford", "Fiesta", 1999, "Blanco");

// Para ver los resultados:
console.log(car1);

console.log("\nCreación con iniciador de objetos");
console.log(`-----------------------------------`);
// creación con iniciador de objetos
const car2: iCar2 = {
    make: "Fiat",
    model: "500",
    year: 2020,
    color: "blanco",
    getInfo() {
        console.log(`
    Car Info:
    ---------
    Marca: ${this.make}
    Modelo: ${this.model}
    Año: ${this.year}
    Color: ${this.color}
        `);
    }
}

car2.getInfo();
