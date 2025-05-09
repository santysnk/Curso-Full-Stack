import { Animal } from "./Animal";

export class Perro implements Animal {
    
    hacerSonido(): void {
        console.log("Guau!");
    }

    mover(): void {
        console.log("El perro corre.");
    }
}
