
export abstract class CalseHabitacional{
    protected dimesion: string;
    protected habitaciones:number;
    
    constructor (pDimesion:string,pHabitaciones:number){
        this.dimesion = pDimesion
        this.habitaciones = pHabitaciones
    }

    //getters
    public getDimesion(): string {
        return this.dimesion;
    }
    public getHabitaciones(): number {
        return this.habitaciones;
    }

    //seters
    public setDimesion(pDimension: string){
        this.dimesion = pDimension;
    }
    public setHabitaciones(pHabitaciones: number) {
        this.habitaciones = pHabitaciones;
    }

    abstract infoTamaño():void;
    

}