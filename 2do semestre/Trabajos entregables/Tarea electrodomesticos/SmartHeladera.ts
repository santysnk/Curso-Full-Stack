import { Heladera } from "./Heladera-Elect";
import { ModuloWifi } from "./ModuloWifi";


export class SmartHeladera extends Heladera {
    private moduloWifi: ModuloWifi;

    constructor(marca: string, modelo: string, temperatura: number, moduloWifi: ModuloWifi) {
        super(marca, modelo, temperatura);
        this.moduloWifi = moduloWifi;
    }

    // Métodos
    public mostrarModuloWifi() {
        console.log(
            `Velocidad: ${this.moduloWifi.getVelocidadMbps()} Mbps, ` +
            `Frecuencia: ${this.moduloWifi.getFrecuenciaGHz()} GHz`
        );
    }
    
    public conectarInternet() {
        console.log(`Conectado a internet con velocidad: ${this.moduloWifi.getVelocidadMbps()} Mbps en frecuencia ${this.moduloWifi.getFrecuenciaGHz()} GHz.`);
    }

    public mostrarInfo() {
        super.mostrarInfo();
        console.log(`Velocidad WiFi: ${this.moduloWifi.getVelocidadMbps()} Mbps, Frecuencia WiFi: ${this.moduloWifi.getFrecuenciaGHz()} GHz.`);
    }
}