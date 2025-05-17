import { Animal } from "./ClaseAbs Animal";

export class Gato extends Animal {
    emitirSonido(): void {
        console.log("Miau!");
    }

    tipoDeDieta(): void {
        console.log("El gato es carnívoro.");
    }
}