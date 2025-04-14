import { Electrodomestico } from "./Elect";

export class Heladera extends Electrodomestico {
    private temperatura: number;

    constructor(pMarca: string, pModelo: string, pTemperatura: number = 4) {
        super(pMarca, pModelo);
        this.temperatura = pTemperatura;
    }

    // Setter
    public setTemperatura(pNuevaTemp: number) {
        this.temperatura = pNuevaTemp;
        console.log(`Temperatura ajustada a ${this.temperatura}°C.`);
    }

    // Getter 
    public getTemperatura():number {
        return this.temperatura;
    }

    // Métodos    
    public mostrarInfo() {
        super.mostrarInfo();
        console.log(`Temperatura actual: ${this.temperatura}°C.`);
    }
}