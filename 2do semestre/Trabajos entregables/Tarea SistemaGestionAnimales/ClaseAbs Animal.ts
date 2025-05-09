import { IAnimal } from "./IAnimal";

export abstract class Animal implements IAnimal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    moverse(): void {
        console.log(`${this.name} se mueve..`);
    }

    abstract emitirSonido(): void;
    abstract tipoDeDieta(): void;
}

