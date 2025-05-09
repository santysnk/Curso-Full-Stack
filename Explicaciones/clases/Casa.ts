import { CalseHabitacional } from "./ClaseHabitacional";

export class Casa extends CalseHabitacional {
    private cochera: boolean;
    private patio:boolean;
    private direccion:string;
    private plantas:number;

    constructor (pDimesion:string,pHabitaciones:number,pCochera:boolean,pPatio:boolean,pDireccion:string,pPlantas:number){
        super(pDimesion,pHabitaciones);
        this.cochera = pCochera
        this.patio = pPatio
        this.direccion = pDireccion
        this.plantas = pPlantas
    }

    getCochera(): boolean {
        return this.cochera;
    }

    setCochera(pCochera: boolean) {
        this.cochera = pCochera;
    }

    getDireccion(): string {
        return this.direccion;
    }

    setDireccion(pDireccion:string){
        if (pDireccion.length < 3){
            console.log("revisar direccion");
            
        }else{
            this.direccion = pDireccion
        }
    }

    infoTamaño(){
        console.log("El tamaño recomendado es grande");
        
    }

}