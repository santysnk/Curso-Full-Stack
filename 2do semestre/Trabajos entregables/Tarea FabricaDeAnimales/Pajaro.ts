import { Animal } from "./Animal";

export class Pajaro implements Animal {
    hacerSonido(): void {
        console.log("Pío!");
    }

    mover(): void {
        console.log("El pájaro vuela.");
    }
}
