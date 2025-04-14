export class Electrodomestico {
    protected marca: string;
    protected modelo: string;
    protected estaEncendido: boolean;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.estaEncendido = false;
    }

    // Getters
    public getMarca(): string {
        return this.marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public getEstaEncendido(): boolean {
        return this.estaEncendido;
    }

    // Setters
    public setMarca(pMarca: string) {
        this.marca = pMarca;
    }

    public setModelo(pModelo: string) {
        this.modelo = pModelo;
    }

    public setEstaEncendido(pEstado: boolean) {
        this.estaEncendido = pEstado;
    }

    // Métodos
    public encender() {
        this.estaEncendido = true;
        console.log(`${this.marca} ${this.modelo} encendido.`);
    }

    public apagar() {
        this.estaEncendido = false;
        console.log(`${this.marca} ${this.modelo} apagado.`);
    }

    public mostrarInfo() {
        let estado: string;
        if (this.estaEncendido) {
            estado = "Encendido";
        } else {
            estado = "Apagado";
        }
        console.log(`Electrodoméstico: ${this.marca} ${this.modelo}, Estado: ${estado}.`);
    }
}
