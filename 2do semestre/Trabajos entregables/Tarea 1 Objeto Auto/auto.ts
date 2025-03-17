// Definimos la clase Auto con sus atributos
export class Auto {
    // Atributos de la clase
    marca: string;
    modelo: string;
    anio: number;

    // Constructor para inicializar los atributos
    constructor(marca: string, modelo: string, anio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    // Método para acelerar
    acelerar(): void {
        console.log(`${this.marca} ${this.modelo} (${this.anio}) está acelerando.`);
    }

    // Método para frenar
    frenar(): void {
        console.log(`${this.marca} ${this.modelo} (${this.anio}) está frenando.`);
    }
}