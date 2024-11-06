import { iCar } from "./type";
// Creación de objeto por función constructora

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
