interface SeAfina{
    afinar():void;
}

abstract class Instrumento {
    protected nombre:string;
    protected tipo:string;

    constructor (pNombre:string,pTipo?:string){
        this.nombre = pNombre;
        this.tipo = pTipo ?? "";
    }

    setTipo(pTipo:string):void{
        this.tipo = pTipo;
    }

    getTipo():string{
        return this.tipo
    }

    abstract tocar():void;

    toString(): string {
        return `Instrumento: ${this.nombre}, Tipo: ${this.tipo}`;
    }
}

class Flauta extends Instrumento {
    material: string;

    constructor(pNombre: string, pTipo: string, material: string) {
        super(pNombre, pTipo);
        this.material = material;
    }

    tocar(): void {
        console.log("Tocando la flauta...");
    }
}

class Violin extends Instrumento implements SeAfina{
    private cantCuerdas: number;

    constructor(pNombre: string, pTipo: string, pCantCuerdas: number) {
        super(pNombre, pTipo);
        this.cantCuerdas = pCantCuerdas;
    }

    setCantCuerdas(pCantCuerdas: number): void {
        this.cantCuerdas = pCantCuerdas;
    }

    getCantCuerdas(): number {
        return this.cantCuerdas;
    }

    tocar(): void {
        console.log("Tocando el violín...");
    }

    afinar(): void {
        console.log("Afinando el violín...");
    }
}

class Piano extends Instrumento implements SeAfina {
    private cantTeclas:number;

    constructor(pNombre: string, pTipo: string, pCantTeclas: number) {
        super(pNombre, pTipo);
        this.cantTeclas = pCantTeclas;
    }

    setCantTeclas(pCantTeclas: number): void {
        this.cantTeclas = pCantTeclas;
    }

    getCantTeclas(): number {
        return this.cantTeclas;
    }

    tocar(): void {
        console.log("Tocando el piano...");
    }

    afinar(): void {
        console.log("Afinando el piano...");
    }

}


class Orquesta {
    private instrumentos:Instrumento[];

    constructor (){
        this.instrumentos = [];
    }

    setInstrumentos(pInstrumentos: Instrumento[]): void {
        this.instrumentos = pInstrumentos;
    }

    getInstrumentos(): Instrumento[] {
        return this.instrumentos;
    }

    ejecutarOrquesta(): void {
        for (let i = 0; i < this.instrumentos.length; i++) {
            this.instrumentos[i].tocar();
        }
    }

}