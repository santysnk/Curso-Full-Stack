import { Animal } from "./ClaseAbs Animal";

export class Perro extends Animal {
    emitirSonido(): void {
        console.log("¡Guau!");
    }

    tipoDeDieta(): void {
        console.log("El perro es omnívoro.");
    }
}