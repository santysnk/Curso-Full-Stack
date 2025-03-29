export class Estudiante {
    private nombreAlumno:string
    private nota:number

    constructor (Pnombre:string,Pnota:number){
        this.nombreAlumno = Pnombre;
        this.nota = Pnota;
    }

    public aprobado():boolean{
        return this.nota > 7;
    }

    public getNombre():string{
        return this.nombreAlumno;
    }

    public getnota():number{
        return this.nota;
    }

    public setNombre(Pnombre:string){
        Pnombre = this.nombreAlumno;
    }

    public setNota(Pnota:number){
        Pnota = this.nota;
    }



}