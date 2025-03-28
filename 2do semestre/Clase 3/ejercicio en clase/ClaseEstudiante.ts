export class Estudiante {
    private nombre:string
    private nota:number

    constructor (Pnombre:string,Pnota:number){
        this.nombre = Pnombre;
        this.nota = Pnota;
    }

    public aprobado():boolean{
        return this.nota > 7;
    }

    public getNombre():string{
        return this.nombre;
    }

    getnota():number{
        return this.nota;
    }

    setNombre(Pnombre:string){
        Pnombre = this.nombre;
    }

    setNota(Pnota:number){
        Pnota = this.nota;
    }



}