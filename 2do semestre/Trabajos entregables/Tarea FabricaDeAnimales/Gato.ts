import { Animal } from "./Animal";

export class Gato implements Animal {
    hacerSonido(): void {
        console.log("Miau!");
    }

    mover(): void {
        console.log("El gato camina sigilosamente.");
    }
}
