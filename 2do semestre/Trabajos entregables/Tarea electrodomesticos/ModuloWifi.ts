export class ModuloWifi {
    private velocidadMbps: number;
    private frecuenciaGHz: number;

    constructor(pVelocidadMbps: number, pFrecuenciaGHz: number) {
        this.velocidadMbps = pVelocidadMbps;
        this.frecuenciaGHz = pFrecuenciaGHz;
    }

    // Getters
    public getVelocidadMbps():number {
        return this.velocidadMbps;
    }

    public getFrecuenciaGHz():number {
        return this.frecuenciaGHz;
    }   

    // Setters
    public setVelocidadMbps(pVel:number) {
        this.velocidadMbps = pVel;
    }

    public setFrecuenciaGHz(pFrec:number) {
        this.frecuenciaGHz = pFrec;
    }
}
